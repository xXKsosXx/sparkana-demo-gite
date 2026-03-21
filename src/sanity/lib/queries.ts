export const GITE_QUERY = `*[_type == "gite"][0]{
  nom,
  adresse,
  telephone,
  email,
  description,
  "carteUrl": carte.asset->url
}`;

export const HEBERGEMENTS_QUERY = `*[_type == "hebergement"] | order(ordre asc){
  nom,
  description,
  capacite,
  prix_nuit,
  badge,
  disponible,
  "image": image.asset->url
}`;

export const EXPERIENCES_QUERY = `*[_type == "experience"] | order(ordre asc){
  titre,
  sous_titre,
  description,
  type,
  "image": image.asset->url
}`;

export const AVIS_QUERY = `*[_type == "avis" && visible == true]{
  auteur,
  ville,
  note,
  texte
}`;
