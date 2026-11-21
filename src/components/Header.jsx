import React from "react";
import contato from '../src/icon/contato.png'
import logo from "../src/logo/logo.png"
import { useEffect, useState } from "react";


export default function Header() {
  const [rolagem, setRolagem] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setRolagem(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    
    <header id="header" className={rolagem ? "rolagem" : ""}>
      <div className="interface">
        <section className="logotipo-cabecalho">
          <img src={logo} alt="Logo" />
        </section>

        <nav className="menu-desktop">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#recursos">Recursos</a></li>
          </ul>
        </nav>

        <div className="btn">
          <ul>
            <li>
              <a href="https://projeto-mentoria-unifeso-cbdt1d7e1-bernardoennes-projects.vercel.app/login">
                <button className="btn-entrar">Entrar</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="btn-cadastre-se">Cadastre-se</button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="btn-contato">
                  <img src={contato} alt="Contato" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

