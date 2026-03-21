const avis = {
  name: "avis",
  title: "Avis",
  type: "document",
  fields: [
    {
      name: "auteur",
      title: "Auteur",
      type: "string",
    },
    {
      name: "ville",
      title: "Ville",
      type: "string",
    },
    {
      name: "note",
      title: "Note (1-5)",
      type: "number",
      validation: (Rule: { min: (n: number) => { max: (n: number) => unknown } }) =>
        Rule.min(1).max(5),
    },
    {
      name: "texte",
      title: "Texte",
      type: "text",
    },
    {
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    },
  ],
};

export default avis;
