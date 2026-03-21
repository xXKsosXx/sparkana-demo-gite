import { NextResponse } from "next/server";

let resendClient: import("resend").Resend | null = null;

function getResend() {
  if (!resendClient) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Resend } = require("resend");
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient!;
}

export async function POST(req: Request) {
  try {
    const { nom, email, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const resend = getResend();
    const emailTo = process.env.EMAIL_TO || "kamal@sparkana.fr";

    // Notification au propriétaire
    await resend.emails.send({
      from: "L'Écrin de la Biche <bonjour@sparkana.fr>",
      to: emailTo,
      subject: `Nouvelle demande de réservation — ${nom}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation au visiteur
    await resend.emails.send({
      from: "L'Écrin de la Biche <bonjour@sparkana.fr>",
      to: email,
      subject: "Votre demande de réservation — L'Écrin de la Biche",
      html: `
        <h2>Merci pour votre demande, ${nom} !</h2>
        <p>Nous avons bien reçu votre message et reviendrons vers vous sous 24 heures.</p>
        <p>En attendant, laissez le silence du Mont Bouquet vous inspirer.</p>
        <br/>
        <p>L'équipe de L'Écrin de la Biche</p>
        <p><em>2500 route de Mas Ravin, 30440 Bouquet, Gard</em></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi." },
      { status: 500 }
    );
  }
}
