window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  let current = "";
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


document.querySelector(".formulaire-contact").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const feedback = form.querySelector(".message-feedback");

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      feedback.textContent = " Merci ! Votre message a bien été envoyé.";
      feedback.style.display = "block";
      feedback.style.color = "#5ac8fa";
      form.reset();
    } else {
      response.json().then(data => {
        feedback.textContent = data.error || " Une erreur est survenue. Veuillez réessayer.";
        feedback.style.display = "block";
        feedback.style.color = "red";
      });
    }
  }).catch(() => {
    feedback.textContent = " Impossible d’envoyer le message. Vérifiez votre connexion.";
    feedback.style.display = "block";
    feedback.style.color = "red";
  });
});
