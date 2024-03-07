import React from "react";
import "./Header.css";
import {
  SearchIcon,
  KeyboardArrowDownIcon,
  Container,
  Logo,
  Input,
  Button
} from "../../exports/exports";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header">
        <Logo />
        <div className="headerNavigation">
          <ul className="headerNavigationItems">
            <li onClick={() => navigate("/")}>
              Home <KeyboardArrowDownIcon className="headerNavIcon" />
            </li>
            <li onClick={() => navigate("/listing")}>
              Listing
              <KeyboardArrowDownIcon className="headerNavIcon" />
            </li>
            <li onClick={() => navigate("/agent-list")}>
              Agents
              <KeyboardArrowDownIcon className="headerNavIcon" />
            </li>
            <li onClick={() => navigate("/property-detail/1")}>
              Property <KeyboardArrowDownIcon className="headerNavIcon" />
            </li>
            <li onClick={() => navigate("/blog-page")}>Blog</li>
          </ul>
        </div>
        <div className="headerSearchAndAuthenticationContainer">
          <div className="headerSearch">
            <Input
              className="headerSearchInput"
              placeholder="Search property"
            />
            <SearchIcon className="searchIcon" />
          </div>
          <div className="headerAuthenticaion">
            <Button name="Login" className="headerLoginButton" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
