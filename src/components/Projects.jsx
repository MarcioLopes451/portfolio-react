import space from "../images/space-tourism.png";
import entertainment from "../images/thumbnail-project-4-large.webp";
import reddit from "../images/reddit-app-sc.png";
import designo from "../images/designo-screenshot.png";
import audiophile from "../images/audiophile.png";

const project = [
  {
    projectName: "Reddit App",
    lang: "HTML CSS JavaScript React",
    image: reddit,
    website: "https://marciolopes451.github.io/React-Reddit-App/",
    repo: "https://github.com/MarcioLopes451/React-Reddit-App",
  },
  {
    projectName: "Entertainment Web App",
    lang: "HTML CSS Javascript React",
    image: entertainment,
    website: "https://marciolopes451.github.io/entertainment-web-app/",
    repo: "https://github.com/MarcioLopes451/entertainment-web-app",
  },
  {
    projectName: "Space Tourism",
    lang: "HTML Tailwind Typescript React",
    image: space,
    website: "https://github.com/MarcioLopes451/space-tourism",
    repo: "https://marciolopes451.github.io/space-tourism/",
  },
  {
    projectName: "Designo App",
    lang: "HTML Tailwind Typescript NextJs",
    image: designo,
    website: "https://designo-zeta.vercel.app",
    repo: "https://github.com/MarcioLopes451/designo",
  },
  {
    projectName: "Audiophile E-Commerce",
    lang: "HTML Tailwind Javascript NextJs",
    image: audiophile,
    website: "https://audiophile-lake.vercel.app",
    repo: "https://github.com/MarcioLopes451/audiophile",
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
