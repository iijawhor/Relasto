import React from "react";
import "./LicensePage.css";
import { Container, Header, Footer } from "../../exports/exports";
function LicensePage() {
  return (
    <Container className="licencePageContainer">
      <Header />
      <div className="licencePage">
        <div className="licencePageHeader">
          <h1>Licence</h1>
        </div>
        <div className="licencePageDetails">
          <div className="licencePageDetail">
            <ul>
              <li>
                <h1>What's covered</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nisi autem id unde delectus molestias quo.
                </p>
              </li>
              <li>
                <h1>What's not covered</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nisi autem id unde delectus molestias quo? Quibusdam
                  iure, totam sit quos voluptas vero.
                </p>
              </li>
              <li>
                <h1>Price Updates</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nisi autem id unde delectus molestias quo? Quibusdam
                  iure, totam sit quos voluptas vero. Enim, dignissimos delectus
                  possimus sint laboriosam in! Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </li>
              <li>
                <h1>Refund Policy</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nisi autem id unde delectus molestias quo? Quibusdam
                  iure, totam sit quos voluptas vero. Enim, <br /> dignissimos
                  delectus possimus sint laboriosam in! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nihil, dignissimos.
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi earum a quibusdam perferendis esse reiciendis impedit
                  quaerat fugit eum accusantium.
                </p>
              </li>
              <li>
                <h1>The type of personal information we collect</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor nisi autem id unde delectus molestias quo? Quibusdam
                  iure, totam sit quos voluptas vero. Enim, dignissimos delectus
                  possimus sint laboriosam in! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nihil, dignissimos.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default LicensePage;
