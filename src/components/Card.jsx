import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

const Card = (props) => {
  return (
    <div class='card'>
      <div class='card-content white-text'>
        <span class='card-title'>{props.companyName}</span>
        <div class='row'>
          <div class='col s3'>{props.jobTitle} </div>
          <div class='col s3'>{props.dateApplied}</div>
          <div class='col s3'>{props.jobStatus} </div>
          <div class='col s3'>
            <button id='info-button' class='btn waves-effect waves-light'>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
