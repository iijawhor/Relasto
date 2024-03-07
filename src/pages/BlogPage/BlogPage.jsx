import React from "react";
import "./BlogPage.css";
import "./BlogPageMobile.css";
import "./BlogPageTab.css";
import {
  Container,
  BlogCard,
  Header,
  Footer,
  Input
} from "../../exports/exports";
function BlogPage() {
  return (
    <Container className="blogPageContainer">
      <Header />
      <div className="blogPage">
        <div className="blogPageHeader">
          <h1>Real Estate News & Blogs</h1>
          <div className="blogPageHeaderSearchContainer">
            <form action="" className="blogPageSearchForm">
              <div className="blogPageSearchInputContainer">
                <Input
                  placeholder="Enter your address"
                  className="blogPageSearchInput"
                />
              </div>
              <div className="blogPageSearchInputContainer">
                <select name="" id="" className="blogPageSearchInput select">
                  <option>Category</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Apartment</option>
                </select>
              </div>
              <div className="blogPageSearchInputContainer">
                <select name="" id="" className="blogPageSearchInput select">
                  <option>Popular</option>
                  <option>Recently Added</option>
                </select>
              </div>
              <button className="blogPageSearchButton">Search</button>
            </form>
          </div>
        </div>
        <div className="blogPageBlogContainer">
          <div className="blogPageBlogCardContainer">
            <BlogCard />
          </div>
          <div className="blogPageBlogCardContainer">
            <BlogCard />
          </div>
          <div className="blogPageBlogCardContainer">
            <BlogCard />
          </div>
          <div className="blogPageBlogCardContainer">
            <BlogCard />
          </div>
        </div>
        <div className="blogPagePagination">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <button className="paginationNextButton">Next Page</button>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default BlogPage;
