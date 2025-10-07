import "@fortawesome/fontawesome-free/css/all.min.css";
import { Header } from "./Sections/Header";
import { Hero } from "./Sections/Hero";
import { Sobre } from "./Sections/Sobre";
import { Habilidades } from "./Sections/Habilidades";
import { Projetos } from "./Sections/Projetos";
import { Contato } from "./Sections/Contato";
import { Footer } from "./Sections/Footer";

const app = document.querySelector("#app");

app.appendChild(Header());
app.appendChild(Hero());
app.appendChild(Sobre());
app.appendChild(Habilidades());
app.appendChild(Projetos());
app.appendChild(Contato());
app.appendChild(Footer());

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

 
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 300);
});
