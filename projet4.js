// Dictionnaire des objets et leur poubelle associée
const triDechets = {
  "bouteille en plastique": "jaune",
  "boîte de conserve": "jaune",
  "carton de pizza": "jaune",
  "bouteille en verre": "verte",
  "journal": "bleue",
  "canette": "jaune",
  "sachet plastique": "grise",
  "restes alimentaires": "grise",
  "papier": "bleue",
  "pot de yaourt": "jaune",
  "verre cassé": "verte",
  "emballage carton": "jaune",
  "canette de soda": "jaune",
  "sac en papier": "bleue"
};

// Fonction de nettoyage du texte
function nettoyerTexte(texte) {
  return texte.trim().toLowerCase().replace(/[’']/g, "'").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Fonction principale de recherche
function chercherPoubelle() {
  const input = document.getElementById("objet").value;
  const resultat = document.getElementById("resultat");
  const cle = nettoyerTexte(input);

  if (triDechets[cle]) {
    const couleur = triDechets[cle];
    resultat.className = `resultat ${couleur}`;
    resultat.textContent = `🗑️ Cet objet va dans la poubelle ${couleur}.`;
  } else {
    resultat.className = "resultat";
    resultat.textContent = "❌ Objet non reconnu. Essayez un autre mot.";
  }
}
