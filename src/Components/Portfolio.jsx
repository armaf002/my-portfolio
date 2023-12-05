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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Omdena Real world AI Project",
    description:
      "Collaboration to Analyzing and Predicting Food Prices in Nigeria Using Machine Learning and Python",
    url: "https://dagshub.com/Omdena/KanoNigeriaChapter_FoodPrices",
  },
  {
    title: "House_price_prediction",
    description:
     "Predictive Model for House Price Estimation using Machine Learning",
    url: "https://github.com/armaf002/House_price_prediction/tree/codespace-armaf002-upgraded-space-succotash-wpx6r449q75f9q6j",
  },
  {
    title: "Zillow webscraping",
    description:
      "Functions that take Zillow property url as input and produce data frames of scraped information as output",
    url: "https://github.com/armaf002/Zillow-Webscraping",
  },
  {
    title: "Profit Optimization",
    description:
      "Optimizing Profitability in Multi-Country Sales Operations",
    url: "https://github.com/armaf002/Optimizing-Profitability",
  },
  {
    title: "Resume",
    description:
      "My Resume in PDF format",
    url: "https://drive.google.com/file/d/1HOK99k_Ky1QKnMGWfXd8veAk9TSznC3V/view?usp=sharing",
  },
  {
    title: "Tableau",
    description:
      "My Tableau Dashboard for Data Visualization",
    url: "https://drive.google.com/file/d/1HOK99k_Ky1QKnMGWfXd8veAk9TSznC3V/view?usp=sharing",
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
