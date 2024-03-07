import React from "react";
import { Container, Footer, Header } from "../../exports/exports";
import "./FaqPage.css";
function FaqPage() {
  return (
    <Container className="faqContainer">
      <Header />
      <div className="faq">
        <div className="faqHeader">
          <h1>FAQ</h1>
        </div>
        <div className="faqDetails">
          <div className="faqDetail">
            <h1>You're viewing sample results.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              dolores aut ab saepe, aliquam quis deserunt dicta qui libero
              distinctio earum, rerum doloremque aspernatur cumque assumenda
              enim amet? Exercitationem sit soluta totam sint perferendis.
            </p>
          </div>
          <div className="faqDetail">
            <h1>
              AddCMS or Business Hosting and index your site to see reel search
              results!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              dolores aut ab saepe, aliquam quis deserunt dicta qui libero
              distinctio earum, rerum doloremque aspernatur cumque assumenda
              enim amet? Esxercitationem sit soluta totam sint perferendis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default FaqPage;
