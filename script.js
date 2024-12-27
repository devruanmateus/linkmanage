// Abrir e fechar menu
let iconMenu = document.getElementById("icon-menu");
let navigationMobile = document.querySelector(".navigation-vmobile");

navigationMobile.classList.add("hidden");

function openMenu() {
  navigationMobile.classList.toggle("hidden");
}

// Abrir e fechar resposta da faq
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const openIcon = faq.querySelector(".open-icon");
  const closeIcon = faq.querySelector(".close-icon");
  const reply = faq.querySelector(".reply");

  closeIcon.classList.add("hidden");
  reply.classList.add("hidden");

  openIcon.addEventListener("click", () => {
    reply.classList.remove("hidden");
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  });

  closeIcon.addEventListener("click", () => {
    reply.classList.add("hidden");
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
  });
});
