import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default function Hero() {

       useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal(".txt-efeito", {
      duration: 2000,
      distance: "90px"
    });

    return () => sr.destroy();
  }, []);

  return (
    <section className="hero">
      <div className="interface">
        <div className="img-hero">
        </div>
        
        <div className="txt-hero txt-efeito">
          <h1>DOMUS</h1>
          <h2>O SEU CONDOMÍNIO NA PALMA DA SUA MÃO!</h2>
          <p>
            Baixe agora o app para facilitar a vida de síndicos e moradores.
            Gestão, comunicação, e segurança em um só lugar.
          </p>
          <a href="#"><button>Download-mobile</button></a>
          <a href="#"><button>Download-desktop</button></a>
        </div>
      </div>
    </section>
  );
}