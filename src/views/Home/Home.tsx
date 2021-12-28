import React from "react";
import { Hello } from "./components/Hello/Hello";
import { Portfolio } from "./components/Portfolio/Portfolio";
import "../../styles/styles.css";

export const Home = () => {
  return (
    <>
      <section className="main">
        <Hello />
      </section>
      <section>
        <h2 className="title">About me</h2>
        <p>I'm is a passionate tech lover and developer that is always thinking about creating innovative products.</p>
        <p>
          I have experience as a software engineer and leadership positions. Definitely a never ending learner, since I
          consider knowledge never is definitive and my goal always is finding the best strategy to board new
          challenges, making a difference.
        </p>
      </section>
      <section>
        <h2 className="title">Skills & experience</h2>
        <ul>
          <li>
            Willdom 11/2015 ~ present Front End Developer & Team Lead | 🔗 see my video presentation As a Frontend
            Engineer, I was involved in multiple challenging projects as a developer and team lead, building project
            architectures, reviewing code, involved in talent recruitment and thinking about how to bring a great
            experience to the user.
          </li>
          <li>
            Globant 08/2014 ~ 11/2015 Front End Developer As an exclusive developer for Google account projects, I built
            applications following strict Google guidelines, performing code reviews to other members of the team,
            participating in new developers recruiting and developing performant and useful architectures.
          </li>
          <li>
            W3 01/2008 ~ 07/2014 Full Stack Developer & Team Lead Team leadership that involved task assignment based on
            team member skills, analysis, technical control and task management; find the best learning path for each
            developer and recruit new team members.
          </li>
          <li>
            EMGE 01/2007 ~ 12/2007 Technical Support Computer, network and system ASP based maintenance and support. BA
            City Gov. 01/2006 ~ 12/2006 Technical Support Computer and network maintenance and support for several
            educational institutions.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="title">Portfolio</h2>
        <Portfolio />
      </section>
      <section>
        <h2 className="title">Education</h2>
        <p>
          UADE 2012 ~ 2020 Informatics Engineer Bachelor’s and Master’s degree in Informatics 5 yrs career for US
          standards Complete
        </p>
        <p>E.T. 26 2001 ~ 2006 Computer Technician Complete</p>
      </section>
      <section>
        <h2 className="title">Contact me</h2>
        <p>Soon.</p>
      </section>
    </>
  );
};
