import React from "react";
import { Helmet } from "react-helmet";

import Floripa from "../assets/floripa.jpg";
import Header from "../assets/header.jpg";
import Rsvp from "../assets/rsvp.jpg";

export default () => {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ju and Avery</title>
        <link rel="canonical" href="http://juandavery.com" />
      </Helmet>
      <div className="title-container">
        <img src={Header} />
      </div>
      <div className="image-container">
        <img id="florpia" src={Floripa} />
        <img id="carrboro" src={Floripa} />
      </div>
      <div className="rsvp-container">
        <img src={Rsvp} />
      </div>
      <button type="button">REGISTRY</button>
    </div>
  );
};
