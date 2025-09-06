// récupération des vidéos depuis YouTube

const videos = [
  {
    titre: "Foufou - Les Syllabes",
    url_youtube: "n5sAIbmhMjM",
    niveau_scolaire: "Primaire",
    age_minimum: 6,
    age_maximum: 10,
    description: "Apprendre les syllabes et la lecture aux plus jeunes."
  },
  {
    titre: "Animaux de la ferme",
    url_youtube: "nGYUGj8UkUA",
    niveau_scolaire: "Primaire",
    age_minimum: 6,
    age_maximum: 10,
    description: "Vocabulaire simple pour apprendre les noms des animaux."
  },
  {
    titre: "Cours de maths collège",
    url_youtube: "9g0s9_iI2fI",
    niveau_scolaire: "Collège",
    age_minimum: 11,
    age_maximum: 14,
    description: "Théorème de Pythagore expliqué simplement."
  },
  {
    titre: "Physique-chimie collège",
    url_youtube: "6h2H_0jX3e0",
    niveau_scolaire: "Collège",
    age_minimum: 11,
    age_maximum: 14,
    description: "Modèle de l'atome pour les collégiens."
  },
  {
    titre: "Les suites - Première",
    url_youtube: "8I6dotcdW3I",
    niveau_scolaire: "Lycée",
    age_minimum: 15,
    age_maximum: 18,
    description: "Cours complet sur les suites numériques."
  },
  {
    titre: "Factorisation polynôme",
    url_youtube: "WiLzTpJPj9A",
    niveau_scolaire: "Lycée",
    age_minimum: 15,
    age_maximum: 18,
    description: "Cours efficace sur la factorisation."
  }
];

// fonction : filtrage des vidéos selon l'âge et le niveau scolaire

function filtrerVideos() {
  const niveau = document.getElementById("niveau").value;
  const age = parseInt(document.getElementById("age").value);
  const container = document.getElementById("videos");
  container.innerHTML = "";

  const filtrées = videos.filter(video => {
    const niveauOK = niveau === "" || video.niveau_scolaire === niveau;
    const ageOK = isNaN(age) || (age >= video.age_minimum && age <= video.age_maximum);
    return niveauOK && ageOK;
  });

  if (filtrées.length === 0) {
    container.innerHTML = "<p>Aucune vidéo ne correspond à vos critères.</p>";
    return;
  }

  filtrées.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${video.url_youtube}" frameborder="0" allowfullscreen></iframe>
      <h3>${video.titre}</h3>
      <p>${video.description}</p>
    `;
    container.appendChild(card);
  });
}


