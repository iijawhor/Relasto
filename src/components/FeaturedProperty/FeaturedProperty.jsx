import React, { useState } from "react";
import "./FeaturedProperty.css";
import "./FeaturedPropertyTab.css";
import "./FeaturedPropertyMobile.css";
import {
  featuredProperty,
  Container,
  Button,
  TrendingFlatIcon,
  FeaturedPropertyCard,
  LandingPageCard
} from "../../exports/exports";
import {} from "@mui/material";
function FeaturedProperty() {
  const featuredPropertyNavigation = [
    { name: "Resident Property", id: 1 },
    { name: "Commercial Property", id: 2 },
    { name: "Industrial Property", id: 3 },
    { name: "Agriculture Property", id: 4 }
  ];
  const [active, setActive] = useState(false);
  const handleActive = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <div className="featuredProperty">
      <div className="featuredPropertyHeader">
        <h1>Featured Properties</h1>
        <div className="">
          <p>Explore All</p>
          <TrendingFlatIcon className="exploreMoreIcon" />
        </div>
      </div>
      <div className="featuredPropertyNavigation">
        {featuredPropertyNavigation.map((navigation) => (
          <Button
            onClick={() => handleActive(navigation.id)}
            name={navigation.name}
            className={`featuredPropertyNavigationButton ${
              navigation.id === active ? "featuredActive" : ""
            }`}
          />
        ))}
      </div>
      {/*  <div className="featuredPropertyHeader"> */}
      <div className="featuredPropertyCards">
        {featuredProperty.map((featuredProperty) => (
          <div className="featuredPropertyCard" key={featuredProperty.id}>
            <LandingPageCard
              title="2861 62nd Ave, Oakland, CA 94605"
              bed={featuredProperty.beds}
              bedroom={featuredProperty.rooms}
              bathroom={featuredProperty.bathroom}
              area="1,032"
              family="family"
              navigationLink="View Details"
              featuredProperty={featuredProperty}
              price="$99,231"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProperty;
