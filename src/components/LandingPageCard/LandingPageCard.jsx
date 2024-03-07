import React from "react";
import "./LandingPageCard.css";
import {
  LocationOnIcon,
  KingBedIcon,
  CloseFullscreenIcon,
  BathroomIcon,
  FamilyRestroomIcon,
  Button
} from "../../exports/exports";

function LandingPageCard({
  location,
  title,
  bed,
  family,
  bathroom,
  area,
  price,
  featuredProperty,
  navigationLink
}) {
  return (
    <div className="LandingPageCard">
      <div className="LandingPageCardImage">
        <img
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
          alt=""
        />
      </div>
      {!featuredProperty && <p className="cardTitle">{title}</p>}
      <div className="LandingPageCardDetails">
        {featuredProperty && (
          <>
            <div className="LandingPageCardDetailLocation">
              {location && <LocationOnIcon className="locationIcon" />}
              <p> {title}</p>
            </div>
            <div className="LandingPageCardDetailFacilities">
              <ul className="LandingPageCardDetailFacilityLists">
                <li>
                  {bed && (
                    <>
                      <KingBedIcon className="LandingPageCardDetailFacilityIcon" />
                      <p>{bed + "Bed Room"} </p>
                    </>
                  )}
                </li>
                <li>
                  {area && (
                    <>
                      {" "}
                      <CloseFullscreenIcon className="LandingPageCardDetailFacilityIcon" />{" "}
                      <p>{area}sqft</p>
                    </>
                  )}
                </li>
                <li>
                  {bathroom && (
                    <>
                      <BathroomIcon className="LandingPageCardDetailFacilityIcon" />{" "}
                      <p>1 Bath</p>
                    </>
                  )}
                </li>
                <li>
                  {family && (
                    <>
                      <FamilyRestroomIcon className="LandingPageCardDetailFacilityIcon" />{" "}
                      <p>{family}</p>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="LandingPageCardDetailPricing">
          <Button
            name={navigationLink}
            className="LandingPageCardDetailPricingViewDetailsButton"
          />
          {price && <p>$649,900</p>}
        </div>
      </div>
    </div>
  );
}

export default LandingPageCard;
