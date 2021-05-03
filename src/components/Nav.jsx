import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div id='nav-color' class='nav-wrapper'>
        <a href='#' class='brand-logo right'>
          Logo
        </a>
        <ul id='nav-mobile' class='left '>
          <li>
            <a href='sass.html'>Code Challenge</a>
          </li>
          <li>
            <a href='badges.html'>Feedback</a>
          </li>
          <li>
            <a href='collapsible.html'>Interview</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
