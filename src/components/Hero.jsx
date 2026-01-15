import "./hero.css";
import astronaut from "../assets/astronaut.svg"; // add your image here

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* background layers */}
      <div className="hero__stars" aria-hidden="true" />
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="hero__inner">
        {/* LEFT */}
        <div className="hero__content">
          <h1 className="hero__title">
            Hi! I&apos;m Mohamed Radhi Brigui <br />
          </h1>
          <p className="hero__text">
            I am a Computer Science student (Informatik) at TU Dortmund
            University. I aspire to become a web developer and have a strong
            interest in building modern, user-friendly web applications. I enjoy
            working with both front-end and back-end technologies and
            continuously improving my skills in web development, design, and
            problem-solving through personal projects and academic studies.
          </p>
          <a className="hero__link" href="#contact">
            <span>Let&apos;s Connect</span>
            <span className="hero__arrow">→</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="hero__art">
          <div className="hero__planetGlow" aria-hidden="true" />
          <img
            className="hero__img"
            src={astronaut}
            alt="Astronaut illustration"
          />
        </div>
      </div>
    </section>
  );
}
