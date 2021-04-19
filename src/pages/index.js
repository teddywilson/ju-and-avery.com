import React from "react";
import { Helmet } from "react-helmet";

import Floripa from "../assets/floripa.jpg";
import Header from "../assets/header.jpg";
import Rsvp from "../assets/rsvp.jpg";
import { isMobile } from "react-device-detect";

const MOBILE_IMAGE = {
  maxWidth: "100%",
};

const DESKTOP_IMAGE = {
  maxWidth: "35%",
  margin: "16px",
};

export default () => {
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ju and Avery</title>
        <link rel="canonical" href="http://juandavery.com" />
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={Header} />
        {isMobile ? (
          <div className="mobile-container">
            <img src={Floripa} />
            <img src={Rsvp} />
            <img src={Floripa} />
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img style={DESKTOP_IMAGE} src={Floripa} />
              <img style={DESKTOP_IMAGE} src={Floripa} />
            </div>
            <img src={Rsvp} />
          </div>
        )}
        <button type="button">REGISTRY</button>
      </div>
    </div>
  );
};
