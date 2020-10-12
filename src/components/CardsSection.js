import React from "react";
import Card from "./Card";
import "./CardsSection.scss";

function CardsSection() {
  return (
    <section className="cardsSection">
      <h1 className="cardsSection__title">Our styles and packs</h1>

      <div className="cardsSection__content">
        <Card
          image="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5de594a789c685314c7a1370_calendar-colour.svg"
          title="DrawKit Classic"
          subtitle="ILLUSTRATION LIBRARY"
          desc="The original DrawKit illustrations: a large, varied library, free
        to use on any website, app, or project"
          footer="110+ illustrations"
        />
        <Card
          image="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5f6da1563faa89a704f97c5c_ecology-%26-nature-card-image.png"
          title="Nature & Ecology Illustrations"
          subtitle="ILLUSTRATION PACK"
          desc="Illustrations of nature, the environment, conservation, climate crisis, rubbish cleanup, & sustainability"
          footer="11 vector illustrations"
        />
        <Card
          image="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5f5702e956ffac494d37a5a7_people-working-collaborating-card-image-export-v0.1.png"
          title="People Working Illustrations"
          subtitle="ILLUSTRATION PACK"
          desc="Illustrations of characters working, collaborating, and creating, designed to be used alone or together"
          footer="24 vector illustrations"
        />
        <Card
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5f489d3e327ad1e07f517eda_transport-card-image.png"
          title="Transport Illustrations"
          subtitle="ILLUSTRATION PACK"
          desc="Cars, boats, planes, and more! Transportation illustrations and scenes to suit any method of travel"
          footer="12 vector illustrations"
        />
        <Card
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5f1a77a264b34791178316b5_education-card-image.png"
          title="Education & Online Learning Illustrations"
          subtitle="ILLUSTRATION PACK"
          desc="Students and teachers in education, studying, exam, and classroom scenes, both online and in person"
          footer="10 vector illustrations"
        />
        <Card
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5eeae67b42a975dbdc67fb01_social-movements-card-image.png"
          title="Black Lives Matter Illustrations"
          subtitle="ILLUSTRATION PACK"
          desc="Illustrations to support social movements, Black Lives Matter, Equality, feminism, LGBTQ+, and more"
          footer="10 vector illustrations"
        />
      </div>
    </section>
  );
}

export default CardsSection;
