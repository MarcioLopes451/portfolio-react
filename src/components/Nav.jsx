import Github from "../images/icon-github.svg";
import Linkedin from "../images/icon-linkedin.svg";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <p>Marcio Lopes</p>
        <div className="social-media">
          <a
            href="https://github.com/MarcioLopes451"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcioalbertol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
