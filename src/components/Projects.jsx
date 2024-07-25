import reddit from "../images/reddit-app-sc.png";
import audiophile from "../images/audiophile.png";
import carurus from "../images/car-urus screenshot.png";
import liftlabs from "../images/liftlabs screenshot.png";
import illusio from "../images/Screenshot at Jul 25 19-00-08.png";
import budi from "../images/Screenshot at Jul 25 19-00-57.png";
import portfolio from "../images/Screenshot at Jul 25 19-23-31.png";

const project = [
  {
    projectName: "illusio",
    lang: "React Taiwind Typescript",
    image: illusio,
    website: "https://illusio.co.uk/",
    repo: "https://github.com/MarcioLopes451/illusio",
  },
  {
    projectName: "budi",
    lang: "React Tailwind Typescript",
    image: budi,
    website: "https://marciolopes451.github.io/budi/",
    repo: "https://github.com/MarcioLopes451/budi",
  },
  {
    projectName: "Lift Labs",
    lang: "React ReactNative Tailwind Typescript",
    image: liftlabs,
    website: "https://marciolopes451.github.io/LiftLabs/",
    repo: "https://github.com/MarcioLopes451/LiftLabs",
    mobileRepo: "https://github.com/MarcioLopes451/LiftLabs-App",
  },
  {
    projectName: "Audiophile E-Commerce",
    lang: "NextJs Tailwind Javascript",
    image: audiophile,
    website: "https://audiophile-lake.vercel.app",
    repo: "https://github.com/MarcioLopes451/audiophile",
  },
  {
    projectName: "Car-Urus",
    lang: "React Tailwind Javascript",
    image: carurus,
    website: "https://marciolopes451.github.io/car-urus/",
    repo: "https://github.com/MarcioLopes451/car-urus",
  },
  {
    projectName: "Reddit App",
    lang: "React Redux Javascript",
    image: reddit,
    website: "https://marciolopes451.github.io/React-Reddit-App/",
    repo: "https://github.com/MarcioLopes451/React-Reddit-App",
  },
  {
    projectName: "Portfolio",
    lang: "React CSS Javascript",
    image: portfolio,
    website: "https://marciolopes451.github.io/portfolio-react/",
    repo: "https://github.com/MarcioLopes451/portfolio-react",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {project.map((item, index) => (
          <div key={index}>
            <div className="content">
              <div className="project-image">
                <img src={item.image} />
                <div className="project-links">
                  <a href={item.website} target="_blank" rel="noreferrer">
                    View Website
                  </a>
                  <a href={item.repo} target="_blank" rel="noreferrer">
                    View Source Code
                  </a>
                  {item.mobileRepo ? (
                    <a href={item.mobileRepo} target="_blank" rel="noreferrer">
                      View Source Code for Mobile App
                    </a>
                  ) : null}
                </div>
              </div>
              <h2>{item.projectName}</h2>
              <p>{item.lang}</p>
              <div className="mobile-tablet-links">
                <a href={item.website} target="_blank" rel="noreferrer">
                  View Website
                </a>
                <a href={item.repo} target="_blank" rel="noreferrer">
                  View Source Code
                </a>
                {item.mobileRepo ? (
                  <a href={item.mobileRepo} target="_blank" rel="noreferrer">
                    Mobile Source Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
