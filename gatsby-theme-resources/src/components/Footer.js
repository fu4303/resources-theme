/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Kofi from "./Kofi";

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: "eggplant",
        color: "white",
        a: { color: "white" },
        marginTop: "auto",
        minHeight: "200px",
        padding: "1em",
        textAlign: "center"
      }}
    >
      <div>
        {" "}
        <h2> Nice to see you! 👋🏾 </h2>
        {
          //  <h3>Would you like to tend to this project? 🌱</h3>
          // Contribute a resource!
        }
        <p>
          Maintained by<a href="https://www.aboutmonica.com"> Monica Powell</a>
        </p>
        <p>
          Open a pull request to submit resources on{" "}
          <a href="https://github.com/M0nica/resources-theme/edit/master/site/resources/resources.yml">
            GitHub
          </a>
          . More ways to submit are coming soon!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
