import React, { useContext } from "react";
// import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import 'bootstrap/dist/css/bootstrap.css'

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text row">
              {bigProjects.projects.map((project) => {
                return (
                  <div
                    className="saaya-health-div col-sm-12 col-md-3 col-lg-3 my-2"
                    // onClick={() => openProjectInNewWindow(project.link)}
                  >
                    <img alt="khalid Working" src={project.image}></img>
                  </div>
                );
              })}
            </div>
            <div className="startup-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
