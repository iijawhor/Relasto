import React, { useState } from "react";
import "./Listing.css";

import {
  Button,
  Container,
  Footer,
  Header,
  Input,
  LandingPageCard,
  Pagination,
  SearchIcon,
  propertyData
} from "../../exports/exports";

function Listing({ featuredProperty = true }) {
  const [data, setData] = useState(propertyData || 0);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 3;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

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
            {currentData.map((filteredData) => (
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
            <Pagination
              dataPerPage={dataPerPage}
              setData={setData}
              currentData={currentData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              indexOfFirstData={indexOfFirstData}
              indexOfLastData={indexOfLastData}
              data={data}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Listing;
