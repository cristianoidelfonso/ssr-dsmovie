import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './style.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <a href="/"><h1>DSMovie</h1></a>
          <a href="https://github.com/cristianoidelfonso" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/cristianoidelfonso</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;