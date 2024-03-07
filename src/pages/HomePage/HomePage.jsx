import React from "react";
import { propertyData } from "../../exports/exports";
import { LandingPage, Header } from "../../exports/exports";
function HomePage() {
  console.log(propertyData);
  return (
    <div>
      <Header />
      <LandingPage />
    </div>
  );
}

export default HomePage;
