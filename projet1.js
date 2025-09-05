document.getElementById("form-pret").addEventListener("submit", function(e) {
  e.preventDefault();

  const montant = parseFloat(document.getElementById("montant").value);
  const tauxAnnuel = parseFloat(document.getElementById("taux").value);
  const duree = parseInt(document.getElementById("duree").value);

  if (isNaN(montant) || isNaN(tauxAnnuel) || isNaN(duree)) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

  const tauxMensuel = tauxAnnuel / 100 / 12;
  const nombreMensualites = duree * 12;

  const mensualite = montant * tauxMensuel / (1 - Math.pow(1 + tauxMensuel, -nombreMensualites));
  const total = mensualite * nombreMensualites;

  document.getElementById("mensualite").textContent = mensualite.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
});
