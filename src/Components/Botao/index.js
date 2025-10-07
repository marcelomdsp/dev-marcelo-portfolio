import "./styles.css";
export function Botao(texto, link, animacao) {
  const botao = document.createElement("a");

  botao.innerText = texto;
  botao.href = link;
  botao.classList.add("botao");
  botao.classList.add(animacao);

  if (link == "https://wa.me/message/B3VCHP5M4BW5E1") {
    botao.target = "_blank";
  }

  botao.addEventListener("click", (event) => {
    const id = botao.getAttribute("data-section");
    const target = document.getElementById(id);

    if (target) {
      // Rolagem suave
      window.scrollTo({
        top: target.offsetTop - 60, // compensa o header fixo, se houver
        behavior: "smooth",
      });
    }

    // Remove o hash da URL após o clique
    history.replaceState(null, "", " ");
  });

  return botao;
}
