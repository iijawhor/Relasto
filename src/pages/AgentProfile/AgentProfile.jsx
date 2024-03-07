import React from "react";
import {
  AddIcon,
  Button,
  Container,
  Footer,
  Header,
  InstagramIcon,
  LinkedInIcon,
  XIcon
} from "../../exports/exports";
import "./AgentProfile.css";
import "./AgentProfileResponsive.css";
import "./AgentProfileResponsiveTab.css";
function AgentProfile() {
  return (
    <Container className="agentProfileContainer">
      <Header />
      <div className="agentProfile">
        <div className="agentProfileHeroImage">
          <img
            src="https://www.pratt.edu/architecture/wp-content/uploads/2022/06/realestate-ms-1.png"
            alt=""
          />
        </div>
        <div className="agentProfileDetailsContainer">
          {/* header end here agentProfileDetailHeader*/}
          <div className="agentProfileDetails">
            <div className="agentProfileDetailsLeft">
              <div className="agentProfileDetailsHeader">
                <div className="agentProfileDetailsHeaderAgentInformation">
                  <img src="" alt="" />
                  <div className="agentProfileDetailsHeaderAgentInformationNameAndReview">
                    <h2>Iftikar Ahmed</h2>
                    <div className="riviewAndRating">
                      <p>***</p>
                      <p>5 reviews</p>
                    </div>
                    <div className="agentProfileDetailsHeaderAgentInformationContactDetails">
                      <p>iftikar@gmail.com</p>
                      <p>+91 82719827333</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agentProfileDetailsDescription">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  tempore minus possimus excepturi deserunt iure explicabo ullam
                  harum quasi, hic expedita nisi velit quod qui, maxime officia!
                  Sed ab officia dolore voluptas, et dignissimos deleniti
                  necessitatibus modi nobis mollitia doloremque fugiat
                  consequatur alias atque corporis ea quis sunt saepe. Deleniti.
                </p>
              </div>
            </div>
            <div className="agentProfileDetailsRight">
              <div className="agentProfileDetailsRightContainer">
                <h2>Experience</h2>
                <p>12+ years experience</p>
              </div>
              <div className="agentProfileDetailsRightContainer">
                <h2>Property Types</h2>
                <p>Private House,Vill,Townhouse,Apartment</p>
              </div>
              <div className="agentProfileDetailsRightContainer">
                <h2>Area</h2>
                <p>California, San Jones, Miami</p>
              </div>
              <div className="agentProfileDetailsRightContainer">
                <h2>Address</h2>
                <p>59 Orchard, NY 5000,US</p>
              </div>
              <div className="agentProfileDetailsRightContainer">
                <h2>License No</h2>
                <p>BF-0523</p>
              </div>
              <div className="agentProfileDetailsRightContainer">
                <h2>Social</h2>
                <div>
                  <InstagramIcon className="socialIcon" />
                  <XIcon className="socialIcon" />
                  <LinkedInIcon className="socialIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="agentProfileCustomerReviews">
            <div className="agentProfileCustomerReviewsHeader">
              <h1>Client Reviews</h1>
              <button className="makeReview">
                Write a Review <AddIcon className="makeReivewIcon" />
              </button>
            </div>
            <div className="agentProfileCustomerReviewContainer">
              <div className="agentProfileCustomerReview">
                <div className="agentProfileCustomerReviewHeader">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg"
                    alt=""
                  />
                  <div className="agentProfileCustomerDetail">
                    <h1>Sahil Khan</h1>
                    <p>***</p>
                  </div>
                </div>
                <div className="agentProfileCustomerReviewDescription">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam nobis accusamus molestias aliquid perferendis
                    voluptatibus aut et eligendi nihil sunt. Explicabo, natus
                    provident vel deserunt, facere tenetur cumque repellat
                    laboriosam hic reiciendis ea inventore numquam qui eaque
                    recusandae molestiae ab!
                  </p>
                </div>
              </div>
              {/* agentProfileCustomerReview */}
              <div className="agentProfileCustomerReview">
                <div className="agentProfileCustomerReviewHeader">
                  <img
                    src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg"
                    alt=""
                  />
                  <div className="agentProfileCustomerDetail">
                    <h1>Sahil Khan</h1>
                    <p>***</p>
                  </div>
                </div>
                <div className="agentProfileCustomerReviewDescription">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam nobis accusamus molestias aliquid perferendis
                    voluptatibus aut et eligendi nihil sunt. Explicabo, natus
                    provident vel deserunt, facere tenetur cumque repellat
                    laboriosam hic reiciendis ea inventore numquam qui eaque
                    recusandae molestiae ab!
                  </p>
                </div>
              </div>
              {/* agentProfileCustomerReview */}
              <Button name="See more" className="customerReviewSeeMoreButton" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default AgentProfile;
