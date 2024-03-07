import React from "react";
import "./Footer.css";
import {
  Logo,
  InstagramIcon,
  XIcon,
  CopyrightIcon,
  LinkedInIcon
} from "../../exports/exports";
function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerItemContainer">
          <Logo />
          <div className="siteDetails">
            <p className="footerAddress">
              59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
            </p>
            <p className="footerPhone">+9991289290</p>
            <p className="footerEmail">relasto@gmail.com</p>
          </div>
          <div className="socialConnects">
            <InstagramIcon className="footerSocialIcon" />
            <XIcon className="footerSocialIcon" />
            <LinkedInIcon className="footerSocialIcon" />
          </div>
        </div>
        <div className="footerItemContainer">
          <h4>Features</h4>
          <ul className="footerItems">
            <li>About</li>
            <li>Contact</li>
            <li>Search</li>
            <li>Home v1</li>
            <li>Home v2</li>
          </ul>
        </div>
        <div className="footerItemContainer">
          <h4>Information</h4>
          <ul className="footerItems">
            <li>Property Details</li>
            <li>Agent Details</li>
            <li>Agent Profile</li>
            <li>Listing v1</li>
            <li>Listing v2</li>
          </ul>
        </div>
        <div className="footerItemContainer">
          <h4>Documentaion</h4>
          <ul className="footerItems">
            <li>Blog</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Licence</li>
          </ul>
        </div>
      </div>
      <p className="footerCopyright">
        <CopyrightIcon />
        All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
