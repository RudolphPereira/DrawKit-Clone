import React from "react";
import "./WebPage.css";

function WebPage() {
  return (
    <section className="webpage">
      <div className="webpage__content">
        <div className="webpage__textContent">
          <h1 className="webpage__title">
            Make your webpages and apps more engaging
          </h1>
          <p className="webpage__desc">
            Fully customise each SVG vector illustration to match your brand and
            bring your designs to life
          </p>
        </div>

        <div className="webpage__imageContent">
          <img
            src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5de5e2ef264fd159a3a8896f_combined-working-export-v0.2.png"
            alt="hero"
            className="webpage__image"
          />
        </div>

        <div className="webpage__links">
          <p className="webpage__linkTitle">Trending Illustration Categories</p>
          <a href="#" className="webpage__link">
            Covid-19,
          </a>
          <a href="#" className="webpage__link">
            Working from home,
          </a>
          <a href="#" className="webpage__link">
            Computers & devices,
          </a>
          <a href="#" className="webpage__link">
            Business & finance,
          </a>
          <a href="#" className="webpage__link">
            Social media,
          </a>
          <a href="#" className="webpage__link">
            Shopping & e-commerce,
          </a>
          <a href="#" className="webpage__link">
            Shipping & fulfilment,
          </a>
        </div>
      </div>
    </section>
  );
}

export default WebPage;
