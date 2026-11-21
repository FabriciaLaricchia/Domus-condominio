import { useEffect, useState } from "react";

const SPANS = [
  "D O M U S"
];

export default function SplashScreen() {
  const [spanStates, setSpanStates] = useState(() => SPANS.map(() => ""));
  const [introExit, setIntroExit] = useState(false);

  useEffect(() => {
    const timeouts = [];

    SPANS.forEach((_, idx) => {
      const activeTimer = setTimeout(() => {
        setSpanStates((prev) =>
          prev.map((state, i) => (i === idx ? "active" : state))
        );
      }, (idx + 1) * 400);
      timeouts.push(activeTimer);
    });

    const fadeGroupTimer = setTimeout(() => {
      SPANS.forEach((_, idx) => {
        const fadeTimer = setTimeout(() => {
          setSpanStates((prev) =>
            prev.map((state, i) => (i === idx ? "fade" : state))
          );
        }, (idx + 1) * 50);
        timeouts.push(fadeTimer);
      });
    }, 2000);
    timeouts.push(fadeGroupTimer);

    const exitTimer = setTimeout(() => {
      setIntroExit(true);
    }, 2300);
    timeouts.push(exitTimer);

    return () => {
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section className="SpashScreen">
      <div
        className="intro"
        style={introExit ? { top: "-100vh" } : undefined}
      >
        <h1 className="logo-header">
          {SPANS.map((text, idx) => (
            <span
              key={text}
              className={`logo ${spanStates[idx]}`.trim()}
            >
            {idx === 0 ? (
                <img
                  src="/domus.svg"
                  alt="DOMUS"
                  className="splash-logo-img"
                />
              ) : (
                text
              )}
              {text}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}