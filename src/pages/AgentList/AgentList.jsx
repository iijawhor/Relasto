import React from "react";
import "./AgentList.css";
import {
  AgentCard,
  Container,
  Footer,
  Header,
  Input,
  SearchIcon,
  Button
} from "../../exports/exports";
import { useNavigate } from "react-router-dom";
function AgentList() {
  const navigate = useNavigate();
  return (
    <Container className="agentListContainer">
      <Header />
      <div className="agentLists">
        <div className="agentListsHeader">
          <h1>Some Nearby Good Agents</h1>
          <div className="agentListSearch">
            <div className="agentLisSearchInputContainer">
              <Input
                placeholder="Enter your address"
                className="agentListSearchInput"
              />
              <SearchIcon className="searchIcon" />
            </div>
            <div className="agentListPropertyOption">
              <select name="propertyOption" id="" className="select">
                <option value="Rent">Rent</option>
                <option value="Buy">Buy</option>
                <option value="Sale">Sale</option>
              </select>
            </div>
            <Button name="Search" className="agentSearchButton" />
          </div>
        </div>
        <div className="agentListsContainer">
          <div className="agentListCard">
            <AgentCard
              name="Iftikar Ahmed"
              rating="****"
              review="4 reiviews"
              buttonName="View Profile"
            />
          </div>
          <div className="agentListCard">
            <AgentCard
              name="Iftikar Ahmed"
              rating="****"
              review="4 reiviews"
              buttonName="View Profile"
            />
          </div>
          <div className="agentListCard">
            <AgentCard
              name="Iftikar Ahmed"
              rating="****"
              review="4 reiviews"
              buttonName="View Profile"
            />
          </div>
          <div className="agentListCard">
            <AgentCard
              name="Iftikar Ahmed"
              rating="****"
              review="4 reiviews"
              buttonName="View Profile"
            />
          </div>
        </div>
        <div className="agentListPagination">
          <Button
            name="Previous Page"
            className="paginationPreviousButton paginationButton"
          />
          <ul>
            <li className="paginationButton">1</li>
            <li className="paginationButton">2</li>
            <li className="paginationButton">3</li>
            <li className="paginationButton">4</li>
          </ul>
          <Button
            name="Next Page"
            className="paginationNextButton paginationButton"
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default AgentList;
