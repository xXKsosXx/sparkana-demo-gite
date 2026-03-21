const hebergement = {
  name: "hebergement",
  title: "Hébergement",
  type: "document",
  fields: [
    {
      name: "nom",
      title: "Nom",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "capacite",
      title: "Capacité (personnes)",
      type: "number",
    },
    {
      name: "prix_nuit",
      title: "Prix par nuit",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Ex: Disponible, Complet, Nouveau",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "disponible",
      title: "Disponible",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    },
  ],
};

export default hebergement;
