import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="home">
        <div className="home__hero--contentTop">
          <div className="home__hero--left">
            <h1 className="home__hero--title">
              Beautiful, free illustrations. Updated weekly.
            </h1>
            <p className="home__hero--desc">
              <span>Now 100% free!</span> Hand-drawn vector illustration and
              icon resources, perfect for your next project.
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
            <img
              src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c329258ff1c074ddb9fb342_drawkit-hero-animation.gif"
              alt="hero"
              className="home__hero--image"
            />
          </div>
        </div>

        <div className="home__hero--contentBottom">
          <div className="home__hero--text">
            <p>Trusted by these fine companies and many more</p>
          </div>

          <div className="home__hero--brandimages">
            <img
              src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c7120fa2d05cec571969c2d_google-logo-export-v1.png"
              alt="google"
            />
            <img
              src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c71210dc6a0652e7a79e8ac_amazon-logo-export-v1.png"
              alt="amazon"
            />
            <img
              src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c7121203f8bb20f5623ca81_invision-logo-export-v1.png"
              alt="invision"
            />
            <img
              src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5ccb89c56c2f6e7f2e20e8cc_typeform-logo-export-v1.png"
              alt="typeform"
            />
            <img
              src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5c71212e6e5e68afc3eab981_toptal-logo-export-v1.png"
              alt="toptal"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
