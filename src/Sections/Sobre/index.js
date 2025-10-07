import "./styles.css";
import minhaImg from "../../img/eu.jpg";
import { Botao } from "../../Components/Botao";
export function Sobre() {
  const sobre = document.createElement("section");
  sobre.innerHTML = `
    <div id="sobre" class="container">
    
      <h2>Sobre Mim</h2>
      <div class="area-sobre">
        <div class="sobre-texto">
          <h3>Olá, sou o <span>Marcelo</span>, e essa é minha trajetória na tecnologia.</h3>
          <p>Sou desenvolvedor em formação, com experiência prática em React, TypeScript, Java e desenvolvimento web. Tenho facilidade em trabalhar em equipe, resolução de problemas e aprender novas tecnologias rapidamente.</p>
          <p>Meu objetivo é construir soluções funcionais, bem estruturadas e simples de usar. Creio que programação não é apenas sobre escrever código, mas também sobre entregar valor real para pessoas e negócios.</p>
          <p>Atualmente curso Engenharia de Software e estou em transição de carreira após atuar em telecomunicação e marketing digital. Isso me trouxe disciplina, visão estratégica e experiência em lidar com diferentes públicos, o que fortalece meu perfil como profissional de tecnologia.</p>
          <p>Gosto de manter o foco em aprendizado contínuo, que me estimula a evoluir constantemente e buscar entregar o melhor em cada desafio.</p>
        </div>

        <div class="area-infos">
          <div class="area-img"><img src=${minhaImg} alt="Minha Foto"></div>
          <div class="minhas-infos">
            <p><strong>Nome:</strong> Marcelo dos Santos</p>
            <p><strong>Idade:</strong> 35 anos</p>
            <p ><strong>Email:</strong> <a href="mailto:marcelopaulomsp@gmail.com">marcelopaulomsp@gmail.com</a></p>
            <div class="btn"></div>
          </div>
        </div>
      </div>

    </div>
  `;

  const btnChamada = Botao("Fale no WhatsApp", "https://wa.me/message/B3VCHP5M4BW5E1", "animacao-sombra");
    sobre.querySelector(".btn").appendChild(btnChamada);
  return sobre;
}
