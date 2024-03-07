import React from "react";
import "./PropertyDetail.css";
import "./PropertyDetailResponsive.css";
import { Container, Footer, Header, Input } from "../../exports/exports";
function PropertyDetail() {
  return (
    <Container>
      <div className="propertyDetail">
        <Header />
        <div className="propertyDetailContainer">
          <div className="propertyDetailImageContainer">
            <img
              src="https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/57134553-0077-4e93-8cfd-58895d271ef8/homeowners-insurance-facebook.jpg"
              alt=""
            />
          </div>
          {/*    <div className="propertyDetailImageContainer"> */}
          <div className="propertyDetailInformation">
            <div className="propertInformationContainer">
              <div className="propertyInformations">
                <div className="propertyInformationHeader">
                  <h1 className="PropertyName">
                    Trovilla Plan in Sereno Canyon - Estate Collection by Toll
                    Brothers
                  </h1>
                  <h2 className="propertyAddress">
                    2861 62nd Ave, Oakland, CA 94605
                  </h2>
                  <div className="propertyPricing">
                    <p>
                      <span>$649,989</span>
                      <span className="propertyPricingText">
                        Online / Cash Payment
                      </span>
                    </p>
                    <p>
                      <span>$555,789</span>
                      <span className="propertyPricingText">
                        0% EMI for 6 Months
                      </span>
                    </p>
                  </div>
                </div>
                {/*  <div className="propertyInformationHeader"> */}
                <div className="propertyDescription">
                  <h3 className="propertyDescriptionTitle">
                    Well-constructed 1562 Sq Ft Home Is Now Offering To You In
                    Uttara For Sale
                  </h3>
                  <p className="propertyDescriptionDetail">
                    A slider is great way to display a slideshow featuring
                    images or videos, usually on your homepage.
                  </p>
                  <p className="propertyDescriptionDetail">
                    Adding sliders to your site is no longer difficult. You
                    don’t have to know coding anymore. Just use a slider widget
                    and it will automatically insert the slider on your web
                    page.
                  </p>
                  <p className="propertyDescriptionDetail">
                    So, the Elementor slider would be a great tool to work with
                    when building a WordPress site.
                  </p>
                </div>
                <div className="propertyLocalInformation">
                  <ul>
                    <li>Map</li>
                    <li>School</li>
                    <li>Crime</li>
                    <li>Eat & Shop</li>
                  </ul>
                  <div className="propertyLocalInformationMap">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*   <div className="propertyInformations"> */}
              <div className="propertyHighlights">
                <h1 className="propertyHighlightsTitle">Property Highlights</h1>
                <div className="propertyHightLightInfo">
                  <ul>
                    <li>
                      <p>Parking</p>
                      <span>No Info</span>
                    </li>
                    <li>
                      <p>Outdoor</p> <span>No Info</span>
                    </li>
                    <li>
                      <p>AC</p> <span>No Info</span>
                    </li>
                    <li>
                      <p> Year Built</p> <span>2022</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <p> HOA</p>
                      <span>No Info</span>
                    </li>
                    <li>
                      <p>Price/sqft</p> <span>$560</span>
                    </li>
                    <li>
                      <p>Listed</p> <span>No Info</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* property Highlights */}
              <div className="propertyAgentInformation">
                <h1 className="propertyHighlightsTitle">Agen Information</h1>
                <div className="propertyAgentDetails">
                  <div className="propertyAgentImage">
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="propertyAgentDetail">
                    <p className="porpertyAgentName">Iftikar Ahmed</p>
                    <p className="ratings">
                      <span className="rating">****</span>
                      <span className="review">4 reviews</span>
                    </p>
                    <p className="agentEmail">ifit@gmail.com</p>
                    <p className="agentPhoneNumber">+9194856400</p>
                  </div>
                </div>
              </div>
            </div>
            {/* propertyInformationContainer */}
            <div className="propertyVisitingFormContainer">
              <h2 className="propertyVisitingFormContainerTitle">
                Request for Visit
              </h2>
              <form className="propertyVisitingForm">
                <div className="propertyVisitingFormNameEmail">
                  <fieldset className="fieldset">
                    <legend className="legend">Your full name</legend>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="propertyDetailFormInput"
                    />
                  </fieldset>
                </div>
                <div className="propertyVisitingFormNamePhoneNumberInput">
                  <fieldset className="fieldset">
                    <legend className="legend">Phone Number</legend>
                    <Input
                      type="text"
                      placeholder="Enter phone number"
                      className="propertyDetailFormInput"
                    />
                  </fieldset>
                </div>
                <div className="propertyVisitingFormNameDateInput">
                  <fieldset className="fieldset">
                    <legend className="legend">Visiting Date</legend>
                    <Input
                      type="text"
                      placeholder="Enter visiting date"
                      className="propertyDetailFormInput"
                    />
                  </fieldset>
                </div>
                <div className="propertyVisitingFormTextArea">
                  <fieldset className="fieldset">
                    <legend className="legend">Message</legend>
                    <textarea
                      type="text"
                      placeholder="Write your message"
                      className="propertyDetailFormInput propertyDetailFormTextarea"
                    />
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
          {/*          <div className="propertyDetailInformation">*/}
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default PropertyDetail;
