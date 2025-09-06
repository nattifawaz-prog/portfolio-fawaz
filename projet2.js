// fonction :  création de nouveaux champs pour ajouter des données de dépenses et de revenus

function ajouterChamp(sectionId) {
  const container = document.getElementById(sectionId);
  const ligne = document.createElement("div");
  ligne.className = "ligne";

  const label = document.createElement("span");
  label.textContent = sectionId === "revenus" ? "🆕 Revenu" : "🆕 Dépense";

  const input = document.createElement("input");
  input.type = "number";
  input.className = "champ " + (sectionId === "revenus" ? "revenu" : "depense");
  input.placeholder = "0";
  input.addEventListener("input", calculerSolde);
    
  ligne.appendChild(label);
  ligne.appendChild(input);
  container.appendChild(ligne);
  calculerSolde();
}

// fonction : calcule de solde

function calculerSolde() {
  const revenus = document.querySelectorAll(".revenu");
  const depenses = document.querySelectorAll(".depense");

  let totalRevenus = 0;
  let totalDepenses = 0;

  revenus.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) totalRevenus += val;
  });

  depenses.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) totalDepenses += val;
  });

  const solde = totalRevenus - totalDepenses;
  document.getElementById("solde").textContent = solde.toFixed(2);
}

document.querySelectorAll(".champ").forEach(input => {
  input.addEventListener("input", calculerSolde);
});

window.onload = calculerSolde;

