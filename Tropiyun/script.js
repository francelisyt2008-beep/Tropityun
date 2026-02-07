// === CONFIG (CAMBIA ESTO CUANDO TE DEN LA INFO) ===
const BUSINESS_NAME = "Jugos Frescos";
const WHATSAPP_NUMBER = "18090000000"; // ejemplo: 18091234567 (sin +, sin espacios)
const DEFAULT_MESSAGE = "Hola! Quiero hacer un pedido 😊";

// ====== NAV MOBILE ======
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// cerrar menú al tocar un link
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// ====== FOOTER YEAR ======
document.getElementById("year").textContent = new Date().getFullYear();

// ====== WHATSAPP ======
function openWhatsApp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  window.open(url, "_blank");
}

function order(product, price) {
  const message = `Hola! Quiero pedir: ${product} (${price}). 😊`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Mostrar número en la sección ubicación
const whatsappText = document.getElementById("whatsappText");
if (whatsappText) {
  whatsappText.textContent = "+" + WHATSAPP_NUMBER;
}
