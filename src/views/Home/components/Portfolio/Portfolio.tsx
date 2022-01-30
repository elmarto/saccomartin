// import { Box } from "@mui/material";
import React from "react";
import { PortfolioCard } from "../../../../components/PortfolioCard/PortfolioCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  /* grid-auto-rows: 22rem; */
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
`;

export const Portfolio = () => {
  const cards = [
    {
      id: 1,
      position: "Front End Developer",
      owner: "Google",
      project: "Project ARA Marketplace ",
      description: "Google’s modular phone marketplace, where the phones and its modules can be acquired. ",
      technologies: "AngularJS, Stylus, Angular Material, Grunt, Bower, Java, Spring".split(", "),
    },

    {
      id: 2,
      position: "Front End Team Lead",
      owner: "Avantage",
      project: "Playbook ",
      description: "Let players bet on NFL plays in real time. ",
      image: "./assets/portfolio/avantage_playbook.png",
      technologies: "Angular 6, Material, Flex Layout, Sass, Java, SmartFox Socket Server".split(", "),
    },

    {
      id: 3,
      position: "Front End Developer",
      owner: "EAB",
      project: "Student Platform",
      description:
        "Web campus platform for universities that allows students to manage their career plan making high focus in accessibility features. ",
      technologies: "AngularJS, Sass, Bootstrap, Gulp, Python".split(", "),
    },

    {
      id: 4,
      position: "Front End Developer",
      owner: "Denim Social",
      project: "Publishing Platform",
      description:
        "A company focused on its Social Network Management Platform, which allows users to keep track of its networks posts and metrics. ",
      technologies: "VueJS, Quasar, Stylus, Python, Django".split(", "),
    },

    {
      id: 5,
      position: "Full Stack Tech Lead",
      owner: "Disney",
      project: "Disney Radio",
      description:
        "Highly customizable website with an extensive amount of interactive modules focused on responsiveness while users can listen to Disney Radio shows. ",
      technologies: "Javascript, jQuery, PHP, Drupal, MySQL.".split(", "),
    },

    {
      id: 6,
      position: "Fullstack Tech Lead",
      owner: "Telefe",
      project: "También Somos Familia",
      description:
        "Website for Argentinian TV show “Somos Familia”, where users can upload their own pet’s videos to YouTube, discuss in forums and more.",
      technologies: "Javascript, jQuery, PHP, Codeigniter, YouTube API, Python, MySQL.".split(", "),
    },

    {
      id: 7,
      position: "Fullstack Tech and Project Lead",
      owner: "Abeceb",
      project: "Website ",
      description:
        "Economics consultancy platform with an extensive amount of data series for chart analysis and predictive simulations. ",
      technologies: "Javascript, jQuery, Ruby on Rails, MySQL.".split(", "),
    },

    {
      id: 8,
      position: "Full Stack Developer",
      owner: "Google",
      project: "Hangouts for Salesforce plugin",
      description:
        "Google’s video chat app Hangouts integration into Salesforce multifunctional platform by making use of both API. ",
      technologies: "Vanilla Javascript, Java.".split(", "),
    },

    {
      id: 9,
      position: "Front End Developer",
      owner: "McDonald’s",
      project: "Halloween Masks",
      description:
        "This web app allows users to use its front cameras to insert an overlay mask in front of its face and analyze its sentiments with an external IA provider. ",
      technologies: "ReactJS 16+, Sass".split(", "),
    },
  ];

  return (
    // <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
    <Grid>
      {cards.map((card) => (
        <PortfolioCard {...card} key={card.id}></PortfolioCard>
      ))}
    </Grid>
    // </Box>
  );
};
