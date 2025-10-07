import "./styles.css";
import img from "../../img/og-img.jpg";
import { Botao } from "../../Components/Botao";

export function Hero() {
  const hero = document.createElement("section");
  hero.innerHTML = `
    <div id="hero" class="hero">
    <div class="hero-container">
      <div class="hero-area-img"><img src="${img}" alt="Imagem de destaque" /></div>
      <div class="hero-text">
        <div class="text-area">
         <h1>Transformo <span>ideias</span> em <span>soluções digitais</span> inteligentes</h1>
        </div>
        <p>Meu foco é desenvolver aplicações modernas, escaláveis e centradas no usuário, ajudando empresas a se destacarem no ambiente digital.</p>
        <div class="area-btn"></div>
      </div>
    </div>
  `;

  const btnChamada = Botao("Contate-me", "#contato", "animacao-sombra");
  hero.querySelector(".area-btn").appendChild(btnChamada);

  const btnProjetos = Botao("Projetos", "#projetos");
  hero.querySelector(".area-btn").appendChild(btnProjetos);

  return hero;
}
