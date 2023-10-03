const carouselItems = document.querySelectorAll(".carousel-item");
let currentItemIndex = 0;

function showNextItem() {
  // oculta o item atual
  carouselItems[currentItemIndex].classList.remove("active");
  // incrementa o índice do item atual
  currentItemIndex++;
  // verifica se atingiu o final da lista
  if (currentItemIndex >= carouselItems.length) {
    currentItemIndex = 0;
  }
  // exibe a prox imagem
  carouselItems[currentItemIndex].classList.add("active");
}
// exibe a primeira imagem
carouselItems[currentItemIndex].classList.add("active");
//intervalo de tempo para trocar de imagem
setInterval(showNextItem, 4000);

function redirectToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
    duration: 10000
  });
}

