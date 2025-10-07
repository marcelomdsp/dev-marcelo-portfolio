import "./styles.css";
import { CardProjetos } from "../../Components/cardProjetos";
import imc from "../../img/projetos/imc.png";
import trafego from "../../img/projetos/trafego.png";
import portfolio from "../../img/projetos/portfolio.png";

export function Projetos() {
  const projetos = document.createElement("section");
  projetos.innerHTML = `
    <div id="projetos" class="projetos-container">
      <div class="area-projetos">
        <div class="projetos-texto">
          <h2>O que já construí</h2>
          <p>Esta seção reúne alguns dos projetos que desenvolvi ao longo da minha jornada como programador. Cada trabalho reflete meu processo de aprendizado, explorando diferentes linguagens e ferramentas, sempre com foco em criar soluções funcionais, bem estruturadas e de fácil uso.</p>
        </div>

        <div class="projetos-lista">
             ${
               CardProjetos(
                 portfolio,
                 "Meu Portfólio",
                 "Portfólio pessoal responsivo desenvolvido com HTML, CSS e JavaScript puro, utilizando Vite e componentização. O projeto me ajudou a entender mais sobre a base da web e como estruturar páginas de forma modular e organizada sem usar frameworks.",
                 "#hero",
                 "https://github.com/marcelo1310/portifolio-marcelo-dev"
               ).outerHTML
             }

            ${
              CardProjetos(
                trafego,
                "Landing Page de Tráfego Pago",
                "Landing page responsiva criada para apresentar serviços de Gestão de Tráfego Pago, com foco em negócios locais. Desenvolvida com React, Vite, Tailwind CSS e TypeScript, inclui otimização SEO e deploy na HostGator.",
                "https://marcelods.com/",
                "https://github.com/marcelomdsp/marcelo-gestaodetrafego"
              ).outerHTML
            }

            ${
              CardProjetos(
                imc,
                "Calculadora de IMC",
                "Aplicação de cálculo de IMC desenvolvida com React e utilização de Context API. Projeto focado em prática de estados globais, componentização e responsividade, utilizando Vite e TypeScript. ",
                "https://calculeseuimc-msp.vercel.app/",
                "https://github.com/marcelomdsp/calculo-de-imc-react"
              ).outerHTML
            }
     
        </div>
      </div>
    </div>
  `;
  return projetos;
}
