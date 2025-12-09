import "./styles.css";
import { Botao } from "../../Components/Botao";

export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
  <div id="header" class="header-container">
    <div class="header-area">
      <a href="#" class="header-logo"><i class="fa-solid fa-mug-saucer"></i></a>
      <button class="menu-toggle" aria-label="Abrir Menu"></button>
      <nav class="header-nav">
        <ul>
          <li><a class="header-link" href="#hero">Início</a></li>
          <li><a class="header-link" href="#sobre">Sobre</a></li>
          <li><a class="header-link" href="#projetos">Projetos</a></li>
          <li><a class="header-link" href="#contato">Contato</a></li>
        </ul>
        <div class="btn-header"></div>
      </nav>
    </div>
  </div>
    `;

  const toggle = header.querySelector(".menu-toggle");
  const menu = header.querySelector(".header-nav");
  const links = header.querySelectorAll(".header-link");
  const btnHeader = Botao(
    "Falar no WhatsApp",
    "https://wa.me/message/B3VCHP5M4BW5E1"
  );
  header.querySelector(".btn-header").appendChild(btnHeader);

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-bars";
  toggle.appendChild(icon);

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    icon.className = menu.classList.contains("show")
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      icon.className = "fa-solid fa-bars";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const headerscroll = document.getElementById("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        headerscroll.classList.add("scrolled");
      } else {
        headerscroll.classList.remove("scrolled");
      }
    });
  });

  return header;
}
