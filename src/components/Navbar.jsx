import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/resources">By State</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
