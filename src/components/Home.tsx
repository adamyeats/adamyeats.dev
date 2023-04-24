import type React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Home: React.FC = () => {
  return (
    <>
      <nav role="navigation" aria-label="Links to my stuff" className="navigation">
        <ul className="navigation__icons">
          <li className="navigation__icon">
            <a href="https://github.com/adamyeats">
              <FontAwesomeIcon icon={faGithubSquare} size="sm" fixedWidth listItem />
            </a>    
          </li>
          <li className="navigation__icon">
            <a href="https://www.linkedin.com/in/adam-yeats/">
              <FontAwesomeIcon icon={faLinkedin} size="sm" fixedWidth listItem />
            </a>
          </li>
        </ul>
      </nav>
      <main className="hero">
        <div className="hero__container">
          <h1 className="hero__title">Hi, I’m <span className="hero__name">Adam</span>.</h1>
          <p className="hero__description">I’m a software engineer from 🇳🇱 (but originally from 🇬🇧).</p>
          <p className="hero__description">I use JavaScript, TypeScript, Go and Rust to make things.</p>
          <p className="hero__description">I currently work as a senior software engineer at <span className="hero__name">???</span>.</p>
          <p className="hero__description">Previously I worked at Elastic, DEPT®, AppSignal and several other companies.</p>
        </div>
      </main>
    </>
  );
};
