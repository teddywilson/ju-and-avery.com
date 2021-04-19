import React from "react";
import { Helmet } from "react-helmet";

import Carrboro from "../assets/floripa.jpg";
import Floripa from "../assets/floripa.jpg";
import Header from "../assets/header.jpg";

import Polaroid from "../components/polaroid";
import Rsvp from "../components/rsvp";

import useDeviceDetect from "../utils/useDeviceDetect";

const URL_FORM_CARRBORO = "https://forms.gle/Ya5JDggD7w8ghhCV7";
const URL_FORM_FLORIPA = "https://forms.gle/Ya5JDggD7w8ghhCV7";

const Index = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ju and Avery</title>
        <link rel="canonical" href="http://juandavery.com" />
      </Helmet>
      <img alt={`Site header`} style={{ width: "160px" }} src={Header} />
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Polaroid
            isMobile={isMobile}
            source={Carrboro}
            url={URL_FORM_CARRBORO}
          />
          <Rsvp isMobile={isMobile} />
          <Polaroid
            isMobile={isMobile}
            source={Floripa}
            url={URL_FORM_FLORIPA}
          />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Polaroid
              isMobile={isMobile}
              source={Carrboro}
              url={URL_FORM_CARRBORO}
            />
            <Polaroid
              isMobile={isMobile}
              source={Floripa}
              url={URL_FORM_FLORIPA}
            />
          </div>
          <Rsvp isMobile={isMobile} />
        </div>
      )}
      {/* Remove after animation created */}
      <button style={{ width: "96px" }} type="button">
        REGISTRY
      </button>
    </div>
  );
};

export default Index;
