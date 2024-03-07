import React from "react";
import "./Listing.css";
import {
  Button,
  Container,
  Footer,
  Header,
  Input,
  LandingPageCard,
  SearchIcon,
  featuredProperty
} from "../../exports/exports";
function Listing() {
  return (
    <Container className="listing">
      <Header />
      <div className="listingContainer">
        <div className="listingHeader">
          <h1 className="listingHeaderTitle">Find Property</h1>
          <div className="listingHeaderFilteringContainer">
            <form
              action=""
              className="listingHeaderFilteringForm"
              type="submit"
            >
              <div className="listingFilterInputContainer">
                <Input
                  placeholder="Enter your address"
                  className="filteringInput filteringCredential"
                />
                <SearchIcon className="searchIcon" />
              </div>
              <select
                name="property"
                className="filteringCredential"
                id="property"
              >
                <option value="">Property type</option>
                <option value="">House</option>
                <option value="">Flat</option>
                <option value="">Real Estate</option>
              </select>
              <div className="filteringPriceInputContainer">
                <label htmlFor="">Price</label>
                <Input
                  type="range"
                  className="filteringPriceInput filteringCredential"
                  id="priceRangeInput"
                />
              </div>
              <Input
                className="selectBedsCount filteringCredential"
                type="text"
                placeholder="Beds"
              />
              <Input
                className="selectBathroomCount filteringCredential"
                type="text"
                placeholder="Bathroom"
              />
              <Button type="submit" name="Search" className="filterButton">
                <SearchIcon />
              </Button>
            </form>
          </div>
          {/* <div className="listingHeaderFilteringContainer"> */}
        </div>
        {/*   <div className="listingHeader"> */}
        {/* {/* filterinf data lsiting rendred below  */}
        <div className="listingFilteredData">
          <div className="listingfilteredDataContainer">
            {featuredProperty.map((filteredData) => (
              <div className="listingCardContainer" key={filteredData.id}>
                <LandingPageCard
                  featuredProperty={featuredProperty}
                  title={filteredData.address}
                  address={filteredData.address}
                  bed={filteredData.beds}
                  img={filteredData.images[0]}
                  family="family"
                  area="99,013"
                  price={filteredData.pricing.total}
                  navigationLink="View Deails"
                  bathroom={filteredData.bathroom}
                />
              </div>
            ))}
          </div>
          <div className="listingFilteredDataPagination">
            <Button name="Previous Page" className="listingPreviousButton" />
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <Button name="Next Page" className="listingNextButton" />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Listing;
