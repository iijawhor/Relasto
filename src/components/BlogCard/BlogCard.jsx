import React from "react";
import "./BlogCard.css";
import { ArrowRightAltIcon } from "../../exports/exports";
function BlogCard() {
  return (
    <div className="blogCard">
      <div className="blogCardImageContainer">
        <img
          src="https://images.ctfassets.net/n2ifzifcqscw/3QRMlAcJFrYAEAbhziixZW/d4b9aa50215c5ea7a161b8a6b59f1974/hero-real-estate-facts-trends.jpeg"
          alt=""
          className="blogCardBlogImage"
        />
      </div>
      <div className="blogCardDetails">
        <div className="blogCardDetailsHeader">
          <p className="blogCardBlogCategory">Business</p>
          <h2 className="blogCardBlogTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, at?
          </h2>
          <div className="blogCardBlogPublishDateAndRedingTime">
            <p>April 2, 2023</p>
            <p>7 min read</p>
          </div>
        </div>
      </div>
      <button className="continueReadingBlogButton">
        Continue Reading <ArrowRightAltIcon />
      </button>
    </div>
  );
}

export default BlogCard;
