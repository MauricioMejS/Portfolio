import React from "react";
import "./abouts.scss";
import ME from "../../assets/_kLDOoju_400x400.jpg";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Works</h5>
              <small>2 Works</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyects</h5>
              <small>10+ Completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at rutrum nisl. Integer et sapien pharetra, ullamcorper augue ut,
            porta neque. Proin convallis eros sed sapien vehicula, posuere
            pulvinar lectus lobortis. Etiam magna eros, fringilla in lectus eu,
            imperdiet pulvinar sapien. Suspendisse ullamcorper nunc ut nunc
            hendrerit blandit. Nunc nec sem ut ligula tristique tincidunt nec at
            sapien. Vivamus tempus, lacus eu molestie tincidunt, sapien odio
            pulvinar nisi, a sodales sapien justo eget sapien. Proin at pretium
            massa. Morbi ut mi at augue rhoncus ultrices at eget nulla. Donec
            imperdiet, nibh et dictum luctus, massa urna finibus dui, non
            sollicitudin orci est ut magna.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
