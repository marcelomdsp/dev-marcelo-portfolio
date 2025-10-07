import "./styles.css";
export function Habilidades() {
  const habilidades = document.createElement("section");
  habilidades.innerHTML = `
    <div class="habilidades-container">
      <h2>Habilidades</h2>
        <div class="skills-container">
          <div class="skill-card">
            <img src="/icons/html5-original.svg" alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div class="skill-card">
            <img src="/icons/css3-original.svg" alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div class="skill-card">
            <img src="/icons/javascript-original.svg" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div class="skill-card">
            <img src="/icons/typescript-original.svg" alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div class="skill-card">
            <img src="/icons/react-original.svg" alt="React" />
            <p>React / React Native</p>
          </div>
           <div class="skill-card">
            <img src="/icons/git-original.svg" alt="Git" />
            <p>Git</p>
          </div>

          <!--
          <div class="skill-card">
            <img src="/icons/nodejs-original.svg" alt="Node.js" />
            <p>Node.js</p>
          </div>
          -->
          <!--
         <div class="skill-card">
            <img src="/icons/java-original.svg" alt="Java" />
            <p>Java</p>
          </div>
          -->

         
        </div>
    </div>
  `;

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");
  const animados = new Set();

  function animarCards() {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const estaVisivel = rect.top < window.innerHeight && rect.bottom > 0;

      if (estaVisivel && !animados.has(card)) {
        card.style.opacity = 0;
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
          card.style.transition = "all 0.3s ease";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }, index * 200);

        animados.add(card);
      }
    });
  }

  animarCards();
  window.addEventListener("scroll", animarCards);
});

  return habilidades;
}
