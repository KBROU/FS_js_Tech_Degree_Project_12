//Bootstrap jumbotron to create app title
import React from 'react';
import AuthV2 from './AuthV2';

const JumboTitle = props => (
  <div className="jumbotron jumbotron-fluid bg-info text-white" style={{ backgroundImage:  `url(${require('../img/mnt2.jpg')})`, backgroundSize: 'cover', backgroundColor: "gray"}}>
    <div className="container text-sm-center pt-5">
      <h1 className="display-2">Start The Day</h1>
      <p className="lead">Information To Get The Day Going</p>
      <div className="btn-group mt-4" role="group" aria-label="Callout buttons">
        <AuthV2
          loggedIn={props.loggedIn}
        />
        <p>{props.nameTest}</p>
      </div>
    </div>
  </div>
);

export default JumboTitle;
