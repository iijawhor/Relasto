import React from "react";
import "./NewsAndConsult.css";
import "./NewsAndConsultMobile.css";
import "./NewsAndConsultTab.css";
import {
  Button,
  Input,
  LandingPageCard,
  TrendingFlatIcon
} from "../../exports/exports";
function NewsAndConsult() {
  return (
    <div className="newsAndConsult">
      <div className="newsAndConsultHeader">
        <h1>News & Consult</h1>
        <div className="">
          <p>Explore All</p>
          <TrendingFlatIcon className="exploreMoreIcon" />
        </div>
      </div>
      <div className="newsAndConsultCards">
        <LandingPageCard
          title="9 Easy-to-Ambitious DIY Projects to Improve Your Home"
          navigationLink="Read the Article"
        />
        <LandingPageCard
          title="9 Easy-to-Ambitious DIY Projects to Improve Your Home"
          navigationLink="Read the Article"
        />
        <LandingPageCard
          title="9 Easy-to-Ambitious DIY Projects to Improve Your Home"
          navigationLink="Read the Article"
        />
      </div>
      <div className="newsLetter">
        <div className="newsLetterContainer">
          <div className="newsLetterHeader">
            <h1>For Recent Update, News.</h1>
            <p>
              We helps businesses customize, automate and scale up their ad
              production and delivery.
            </p>
            <div className="newsLetterInputContainer">
              <Input
                className="newsLetterInput"
                placeholder="Enter your email"
              />
              <Button className="newsLetterButton" name="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAndConsult;
