const gite = {
  name: "gite",
  title: "Gîte",
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
      name: "adresse",
      title: "Adresse",
      type: "string",
    },
    {
      name: "telephone",
      title: "Téléphone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "carte",
      title: "Carte",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default gite;
