import React from "react";
import { Helmet } from "react-helmet";

import Floripa from "../assets/floripa.jpg";
import Header from "../assets/header.jpg";
import RsvpDesktop from "../assets/rsvp-desktop.jpg";
import RsvpMobile from "../assets/rsvp-mobile.png";
import { isMobile } from "react-device-detect";

const MOBILE_POLAROID_IMAGE = {
  maxWidth: "75%",
  margin: "8px",
};

const DESKTOP_POLAROID_IMAGE = {
  maxWidth: "25%",
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
      <img style={{ width: "160px" }} src={Header} />
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div>
            <img style={MOBILE_POLAROID_IMAGE} src={Floripa} />
          </div>
          <div>
            <img
              style={{
                width: "96px",
              }}
              src={RsvpMobile}
            />
          </div>
          <div>
            <img style={MOBILE_POLAROID_IMAGE} src={Floripa} />
          </div>
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img style={DESKTOP_POLAROID_IMAGE} src={Floripa} />
            <img style={DESKTOP_POLAROID_IMAGE} src={Floripa} />
          </div>
          <img
            style={{
              height: "96px",
            }}
            src={RsvpDesktop}
          />
        </div>
      )}
      {/* Remove after animation created */}
      <button style={{ width: "96px" }} type="button">
        REGISTRY
      </button>
    </div>
  );
};
