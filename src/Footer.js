import React from "react";
import "./footer.css";

export default function Footer () {
    return (
        <footer>
            This app was codded by {" "}
        <a
          href="https://www.linkedin.com/in/maria-kozielska-5018751bb"
          target="_blank"
          rel="noreferrer"
        > Maria Misia kozielska
        </a>{" "}
          open source on {" "}
          <a 
          href= "https://github.com/misshia/my-app-weather"
          target="_blank"
          rel="noreferrer">
            github
        </a>
      </footer>

        
    )
}