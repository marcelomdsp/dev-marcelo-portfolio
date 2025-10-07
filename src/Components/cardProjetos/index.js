import "./styles.css";

export function CardProjetos(src, titulo, descricao, linkProjeto, linkGithub) {
  const card = document.createElement("div");
  card.className = "projeto-item";
  card.innerHTML = `
    <div class="projeto-header">  
        <img src="${src}" alt="${titulo}" />
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    <div class="projeto-link">
        <a href="${linkProjeto}" target="_blank"><i class="fa-solid fa-link"></i></a>
         <a href="${linkGithub}" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
  `;

  card.classList.add("projeto-item");
  return card;
}
