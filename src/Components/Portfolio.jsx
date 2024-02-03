/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/fog.jpg";

const imageAltText = "Lost in the mystic embrace of the fog, where reality meets enchantment.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Post🎉",
    description:
      "This is my MLSA certificate post",
    url: "https://www.linkedin.com/posts/harrum-fatima-443b71292_alpha-mlsa-activity-7157079648172949504-RORB?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "LinkedIn",
    description:
      "Lets connect on LinkedIn : ",
    url: "https://www.linkedin.com/in/harrum-fatima-443b71292",
  },
  {
    title: "AI certificate",
    description:
      "This is the link of my Fundamental AI concepts badge",
    url: "https://www.linkedin.com/posts/harrum-fatima-443b71292_fundamental-ai-concepts-activity-7156326281557557248-qxBH?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Github account",
    description:
      "Check out my github profile.",
    url: "https://github.com/harrumfatima14",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
