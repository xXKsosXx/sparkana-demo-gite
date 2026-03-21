const experience = {
  name: "experience",
  title: "Expérience",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
    },
    {
      name: "sous_titre",
      title: "Sous-titre",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Randonnée", value: "RANDO" },
          { title: "Gastronomie", value: "GASTRO" },
          { title: "Bien-être", value: "BIEN_ETRE" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    },
  ],
};

export default experience;
