import React from "react";
import "./Home.css";

const image =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c329258ff1c074ddb9fb342_drawkit-hero-animation.gif";
const googleLogo =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c7120fa2d05cec571969c2d_google-logo-export-v1.png";
const amazonLogo =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c71210dc6a0652e7a79e8ac_amazon-logo-export-v1.png";
const invisionLogo =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c7121203f8bb20f5623ca81_invision-logo-export-v1.png";
const typeformLogo =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ccb89c56c2f6e7f2e20e8cc_typeform-logo-export-v1.png";
const toptalLogo =
  "https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c71212e6e5e68afc3eab981_toptal-logo-export-v1.png";

function Home() {
  return (
    <section className="home">
      <div className="home__hero--contentTop">
        <div className="home__hero--left">
          <h1 className="home__hero--title">
            Beautiful, free illustrations. Updated weekly.
          </h1>
          <p className="home__hero--desc">
            <span>Now 100% free!</span> Hand-drawn vector illustration and icon
            resources, perfect for your next project.
          </p>
          <form className="home__hero--form">
            <p>Sign up for free weekly illustrations: </p>
            <input
              type="text"
              className="home__hero--input"
              placeholder="Enter your email address"
            />
            <button className="home__hero--button">Join</button>
          </form>
        </div>

        <div className="home__hero--right">
          <img src={image} alt="hero" className="home__hero--image" />
        </div>
      </div>

      <div className="home__hero--contentBottom">
        <div className="home__hero--text">
          <p>Trusted by these fine companies and many more</p>
        </div>

        <div className="home__hero--brandimages">
          <img src={googleLogo} alt="google" />
          <img src={amazonLogo} alt="amazon" />
          <img src={invisionLogo} alt="invision" />
          <img src={typeformLogo} alt="typeform" />
          <img src={toptalLogo} alt="toptal" />
        </div>
      </div>
    </section>
  );
}

export default Home;
