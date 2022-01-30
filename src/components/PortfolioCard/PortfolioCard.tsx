import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";

interface IPortfolioCard {
  project: string;
  description: string;
  owner: string;
  position: string;
  image?: string;
  technologies: string[];
}

const Article = styled.article`
  box-shadow: 3px 3px 10px #dedede;
`;

const Image = styled.img`
  background: grey;
  min-height: 200px;
  min-width: 100%;
  width: 100%;
  object-fit: cover;
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

export const PortfolioCard = ({ project, description, owner, position, technologies, image }: IPortfolioCard) => {
  return (
    <Article>
      <Image alt={project} src={image || ""} />
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
