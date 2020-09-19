import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';

import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./layout.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const CustomHeader = styled.header`
    margin: 0 auto;
    padding: 3px 15px;
    text-align: center;
    background-color: black;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const CustomTitle = styled.div`
  h2 {
    color: white;
  }
`

const CustomMenu = styled.div`
  font-family: "Ubuntu";
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  a:hover {
    text-decoration: none;
    color: black;
  }
`
const CustomLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
    font-family: "Hind";
`;

const CleanLink = styled(props => <Link {...props} />)`
    color: white;
    text-decoration: none;
    box-shadow: none;
`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <StyledLink
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </StyledLink>
));


const Header = ({ siteTitle, menuLinks }) => (
  <CustomHeader>
  <CustomTitle>
      <h2>
      <StyledLink href="/">{siteTitle}</StyledLink>
      </h2>
  </CustomTitle>
  <CustomMenu>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic-button">
        <FontAwesomeIcon icon={faBars} color="white" size="lg"/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="/projects">Projects</Dropdown.Item>
        <Dropdown.Item href="/blog">Articles</Dropdown.Item>
        <Dropdown.Item href="/contact">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  </CustomMenu>
  </CustomHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header