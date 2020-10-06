import React from "react";
import "./HomeTwo.css";
import Image from "../images/HeroTwo.png";

const iconOne =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ecf40c4ecf1c59478b050a9_consistently-style.svg";
const iconTwo =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ecf41f79d8fbe95d6ded819_customisable.svg";
const iconThree =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ecf453d4752d36a78e5b53a_royalty%20free.svg";
const iconFour =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ecf45f70d06db11f4f8483a_vector.svg";
const iconFive =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ecf4efa08921959f55cb4ab_multiple%20styles.svg";

function HomeTwo() {
  return (
    <div className="homeTwo">
      <div className="homeTwo__content">
        <div className="homeTwo__topContent">
          <div className="homeTwo__image--container">
            <img src={Image} alt="homeTwo" className="homeTwo__image" />
          </div>

          <div className="homeTwo__text--container">
            <h1 className="homeTwo__text--title">
              High quality, free vector icons, in four styles
            </h1>
          </div>
        </div>

        <div className="homeTwo__bottomContent">
          <div className="homeTwo__text--container2">
            <h4 className="homeTwo__text--title2">
              A constantly updated library of high quality,
              <span> beautiful vector icons,</span> in four styles.
              <span> Free to use </span>
              on personal and commercial projects, royalty free.
            </h4>
          </div>

          <div className="homeTwo__icon--container">
            <div className="icons__imageContent">
              <div className="icon">
                <img src={iconOne} alt="iconOne" className="icon__image" />
              </div>
              <div className="icon">
                <img src={iconTwo} alt="iconTwo" className="icon__image" />
              </div>
              <div className="icon">
                <img src={iconThree} alt="iconThree" className="icon__image" />
              </div>
              <div className="icon">
                <img src={iconFour} alt="iconFour" className="icon__image" />
              </div>
              <div className="icon">
                <img src={iconFive} alt="iconFive" className="icon__image" />
              </div>
            </div>
            <div className="icon__textContent">
              <div className="icon__title">
                <p className="icon__text">ALWAYS CONSISTANT</p>
              </div>
              <div className="icon__title">
                <p className="icon__text">FULLY CUSTOMIZABLE</p>
              </div>
              <div className="icon__title">
                <p className="icon__text">ROYALTY FREE</p>
              </div>
              <div className="icon__title">
                <p className="icon__text">VECTOR, NO PIXELATION</p>
              </div>
              <div className="icon__title">
                <p className="icon__text">MULTIPLE STYLES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTwo;
