// script.js

// Função para abrir WhatsApp com pedido do pacote
function pedido(pacote) {
  const telefone = "5511960527970"; // Substitua pelo número da empresa
  const mensagem = `Olá! Gostaria de pedir o pacote: ${pacote}`;
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Relógio digital
function updateClock() {
  const clock = document.getElementById('digiClock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  clock.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Animação de seções e cards ao rolar a página
function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.card');

  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



