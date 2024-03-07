import React from "react";
import "./AgentCard.css";
import { Button } from "../../exports/exports";
function AgentCard({ name, rating, review, buttonName }) {
  return (
    <div className="agentCard">
      <div className="agentCardImageContainer">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
      </div>
      <div className="agentCardDetails">
        <h3 className="agentCardName">{name}</h3>
        <div className="agentCardReviewsAndRating">
          <p>{rating}</p>
          <p>{review}</p>
        </div>
      </div>
      <Button name={buttonName} className="agentCardProfileButton" />
    </div>
  );
}
export default AgentCard;
