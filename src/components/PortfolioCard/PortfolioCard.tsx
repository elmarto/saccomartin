import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

interface IPortfolioCard {
  project: string;
  description: string;
  owner: string;
  position: string;
  technologies: string[];
}

const Article = styled.article`
  max-width: 25%;
  box-shadow: 3px 3px 10px #dedede;
  flex-grow: 1;
  min-width: 300px;
`;

const Image = styled.img`
  background: grey;
  min-height: 200px;
  min-width: 100%;
`;

const Position = styled.h3`
  margin: 0;
`;

const Project = styled.h4`
  margin: 0;
`;

const Owner = styled.h5`
  margin: 0;
`;

const Description = styled.span`
  color: grey;
`;

const Tech = styled.span`
  color: grey;
  font-size: small;
  margin: 0.4em;
`;

export const PortfolioCard = ({ project, description, owner, position, technologies }: IPortfolioCard) => {
  return (
    <Article>
      <Image alt={project} />
      <Box sx={{ p: 2 }}>
        <Position>{position}</Position>
        <Project>{project}</Project>
        <Owner>{owner}</Owner>
        <Description>{description}</Description>

        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
          {technologies.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </Box>
      </Box>
    </Article>
  );
};
