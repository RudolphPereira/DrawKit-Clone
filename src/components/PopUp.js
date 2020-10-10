import React from "react";
import "./PopUp.css";

const projectLink = "https://rudolphpereira.github.io/Portfolio/projects/";

function PopUp() {
  return (
    <div className="popUp">
      <div className="popUp__content">
        <h1>
          Hey, Thank you for checking this clone.
          <span> </span>
          <span>
            I am still trying to figure this particular page out!
            <span role="img" aria-label="string">
              😩
            </span>
          </span>
        </h1>
        <p>Meanwhile you can view few of my other projects.</p>

        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          DIVE BACK IN
        </a>
      </div>
    </div>
  );
}

export default PopUp;
