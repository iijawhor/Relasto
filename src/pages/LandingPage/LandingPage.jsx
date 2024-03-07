import React, { useState } from "react";
import "./LandingPage.css";
import "./LandingPageTab.css";
import "./LandingPageMobile.css";
import {
  Button,
  Container,
  Input,
  LocationOnIcon,
  SearchIcon,
  VisibilityIcon,
  WalletIcon,
  CelebrationIcon,
  FeaturedProperty,
  NewsAndConsult,
  Footer,
  CopyrightIcon
} from "../../exports/exports";
function LandingPage() {
  const searchNavigationButton = [
    { name: "Sell", id: 1 },
    { name: "Buy", id: 2 },
    { name: "Rent", id: 3 }
  ];
  const [active, setActive] = useState(false);
  const handleNavigation = (id) => {
    setActive(active === id ? null : id);
    console.log("Cliked");
  };
  return (
    <Container>
      <section className="landingPageHeroSection">
        <div className="landingPageHeroSectionContainer">
          <div className="landingPageHeroSectionSearchContainer">
            <div className="landingPageHeroSectionSearchContainerHeader">
              <h1>Find a perfect property Where you'll love to live</h1>
              <p>
                We helps businesses customize, automate and scale up their ad
                production and delivery.
              </p>
            </div>
            <div className="landingPageHeroSectionSearchFormContainer">
              <div className="landingPageHeroSectionFormContainerNavigationButtons">
                {searchNavigationButton.map((button) => (
                  <Button
                    onClick={() => handleNavigation(button.id)}
                    name={button.name}
                    className={`heroSectionSearchNavigationButton landingPageButton ${
                      active === button.id ? "active" : ""
                    }`}
                  />
                ))}
              </div>
              <form action="" className="heroSectionSearchForm">
                <div className="heroSeacrtionSearchFormInputContainer">
                  <Input
                    placeholder="City/Street"
                    className="heroSectionSearchFormInput"
                  />
                  <LocationOnIcon className="icon" />
                </div>
                <div className="heroSeacrtionSearchFormInputContainer">
                  <Input
                    type="dropdown"
                    placeholder="Property Type"
                    className="heroSectionSearchFormInput"
                  />
                </div>
                <div className="heroSeacrtionSearchFormInputContainer">
                  <Input
                    type="dropdown"
                    placeholder="Price Range"
                    className="heroSectionSearchFormInput"
                  />
                </div>
                <Button className="heroSectionSearchButton" name="Search" />
              </form>
            </div>
            {/* landingPageHeroSectionSearchContainerSearchFormContainer */}
          </div>
          {/*           <div className="landingPageHeroSectionSearchContainer"> */}
          <div className="landingPageHeroSectionImageContainer">
            <img
              src="https://static.wixstatic.com/media/473a34_56452a5790d34b50aeef75b7090007c8~mv2.jpg/v1/fill/w_1406,h_1438,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/473a34_56452a5790d34b50aeef75b7090007c8~mv2.jpg"
              alt="Hero....."
            />
          </div>
        </div>
        {/* <div className="landingPageHeroSectionContainer"> */}
      </section>
      <section className="landingPageAppointmentSection">
        <div className="landingPageAppointmentSectionLeft">
          <div className="landingPageAppointmentSectionLeftContent">
            <h1>Simple & easy way to find your dream Appartment</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button
              name="Get Started"
              className="landingPageAppointmentSectionButton landingPageButton"
            />
          </div>
        </div>
        <div className="landingPageAppointmentSectionRight">
          <div className="landingPageAppointmentSectionLeftContentCard">
            <SearchIcon className="landingPageAppointmentIcon" />
            <p>Search your location</p>
          </div>
          <div className="landingPageAppointmentSectionLeftContentCard">
            <VisibilityIcon className="landingPageAppointmentIcon" />
            <p>Visit Appointment</p>
          </div>
          <div className="landingPageAppointmentSectionLeftContentCard">
            <WalletIcon className="landingPageAppointmentIcon" />
            <p> Get your dream house</p>
          </div>
          <div className="landingPageAppointmentSectionLeftContentCard">
            <CelebrationIcon className="landingPageAppointmentIcon" />
            <p>Enjoy your Appointment</p>
          </div>
        </div>
      </section>
      {/* <section className="landingPageAppointmentSection"> */}
      <section className="landingPageFeaturedProperty">
        <div className="landingPageFeaturedPropertyContainer">
          <FeaturedProperty />
        </div>
      </section>
      <section className="landingPageNewsAndConsultSection">
        <div className="landingPageNewsAndConsultSectionContainer">
          <NewsAndConsult />
        </div>
      </section>
      <section className="landingPageFooterSection">
        <div className="ladingPageFooterContainer">
          <Footer />
        </div>
      </section>
    </Container>
  );
}

export default LandingPage;
