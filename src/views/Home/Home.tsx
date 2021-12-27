import React from "react";
import { Hello } from "../../components/hello/Hello";
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
        <p>
          Front End Developer Google | Project ARA Marketplace Google’s modular phone marketplace, where the phones and
          its modules can be acquired. AngularJS, Stylus, Angular Material, Grunt, Bower, Java, Spring
        </p>
        <p>
          Front End Team Lead Avantage | Playbook Let players bet on NFL plays in real time. Angular 6, Material, Flex
          Layout, Sass, Java, SmartFox Socket Server
        </p>
        <p>
          Front End Developer EAB | Student Platform Web campus platform for universities that allows students to manage
          their career plan making high focus in accessibility features. AngularJS, Sass, Bootstrap, Gulp, Python
        </p>
        <p>
          Front End Developer Halloween Masks | McDonald’s This web app allows users to use its front cameras to insert
          an overlay mask in front of its face and analyze its sentiments with an external IA provider. ReactJS 16+,
          Sass
        </p>
        <p>
          Front End Developer Denim Social Platform Gremlin Social is a company focused on its Social Network Management
          Platform, which allows users to keep track of its networks posts and metrics. VueJS, Quasar, Stylus, Python,
          Django
        </p>
        <p>
          Full Stack Developer Google | Hangouts for Salesforce plugin Google’s video chat app Hangouts integration into
          Salesforce multifunctional platform by making use of both API. Vanilla Javascript, Java.
        </p>
        <p>
          Full Stack Tech Lead Disney | Disney Radio Highly customizable website with an extensive amount of interactive
          modules focused on responsiveness while users can listen to Disney Radio shows. Javascript, jQuery, PHP,
          Drupal, MySQL.
        </p>
        <p>
          Fullstack Tech Lead Telefe | También Somos Familia Website for Argentinian TV show “Somos Familia”, where
          users can upload their own pet’s videos to YouTube, discuss in forums and more. Javascript, jQuery, PHP,
          Codeigniter, YouTube API, Python, MySQL.
        </p>
        <p>
          Fullstack Tech and Project Lead Abeceb | Website Economics consultancy platform with an extensive amount of
          data series for chart analysis and predictive simulations. Javascript, jQuery, Ruby on Rails, MySQL.
        </p>
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
