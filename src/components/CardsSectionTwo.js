import React from "react";
import "./CardsSectionTwo.scss";
import CardTwo from "./CardTwo";

function CardsSectionTwo() {
  return (
    <section className="cardsSectionTwo">
      <h1 className="cardsSectionTwo__title">Our icon packs</h1>

      <div className="cardsSectionTwo__content">
        <CardTwo
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5f606a7959273565f83c1b85_website-states-pack-thumbnail-working.png"
          title="Website States Icons"
          subtitle="ICON PACK"
          desc="Icons for websites, apps, users, ecommerce, apps, errors, and more"
          footer="51 vector icons"
        />
        <CardTwo
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5f028ab8c083b751eba2aa56_education-pack-thumbnail.png"
          title="Education Icons"
          subtitle="ICON PACK"
          desc="Icons for education, school, studying, learning, and more"
          footer="53 vector icons"
        />
        <CardTwo
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5ef992e28d27df1685a71637_ecology-nature-pack-thumbnail.png"
          title="Ecology & Nature Icons"
          subtitle="ICON PACK"
          desc="Icons for nature, ecology, climate change, biology, sustainable living, and more"
          footer="58 vector icons"
        />
        <CardTwo
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5ee1c8c24c44309fc44b43ae_startups-pack-thumbnail.png"
          title="Startups and SaaS Icons"
          subtitle="ICON PACK"
          desc="Icons for startups, SaaS, ecommerce, technology, and everything related to online business and the digital world"
          footer="50 vector icons"
        />
        <CardTwo
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5ecf69d6a8033635918112ef_covid19-thumbnail-larger.png"
          title="COVID-19 Icons"
          subtitle="ICON PACK"
          desc="Icons for signage, health notices, disease information, and aiding in preventing the spread of COVID-19"
          footer="50 vector icons"
        />
        <CardTwo
          image="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5ecf69cc0e918e05019ec8b9_food%26drink-pack-thumbnail-larger.png"
          title="Food & Drink Icons"
          subtitle="ICON PACK"
          desc="A delicious banquet of food & drink icons, covering everything from coffee to croissants"
          footer="50 vector icons"
        />
      </div>
    </section>
  );
}

export default CardsSectionTwo;
