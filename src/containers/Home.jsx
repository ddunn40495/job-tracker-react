import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Nav from "../components/Nav";
import Card from "../components/Card";
import jobData from "../data";
const Home = () => {
  const [jobApps, setJobApps] = useState(jobData);
  console.log(jobApps);

  const findInterviews = (jobs) => {
    for (let i = 0; i < jobs.length; i++) {}
  };

  return (
    <Fragment>
      <body>
        <Nav />
        <div class='container'>
          <Link className='waves-effect waves-light btn' to='/new'>
            New Job
          </Link>
          <div className='row'>
            {jobApps.map((job) => (
              <Card
                key={job.company_name}
                companyName={job.company_name}
                jobTitle={job.job_title}
                dateApplied={job.date}
                jobStatus={job.status}
              />
            ))}
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Home;
