import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Carrboro from "../assets/carrboro.jpg";
import Floripa from "../assets/floripa.jpg";
import Header from "../assets/header.jpg";
import Registry from "../assets/registry.jpg";

import Polaroid from "../components/polaroid";
import Rsvp from "../components/rsvp";

import useDeviceDetect from "../hooks/useDeviceDetect";

const URL_FORM_CARRBORO = "https://forms.gle/Ya5JDggD7w8ghhCV7";
const URL_FORM_FLORIPA = "https://forms.gle/yxkW6CJ58p2sw3yW7";

const Index = () => {
  const { isMobile } = useDeviceDetect();
  const [isCarrboroHovering, setIsCarrboroHovering] = useState(false);
  const [isFloripaHovering, setIsFloripaHovering] = useState(false);
  const carrboroPolaroid = (
    <Polaroid
      isMobile={isMobile}
      source={Carrboro}
      url={URL_FORM_CARRBORO}
      emoji={`🇺🇸`}
      emojiOnTop={true}
      dim={isFloripaHovering}
      onHover={(isHovering) => {
        setIsCarrboroHovering(isHovering);
      }}
    />
  );
  const floripaPolaroid = (
    <Polaroid
      isMobile={isMobile}
      source={Floripa}
      url={URL_FORM_FLORIPA}
      emoji={`🇧🇷`}
      emojiOnTop={isMobile ? false : true}
      dim={isCarrboroHovering}
      onHover={(isHovering) => {
        setIsFloripaHovering(isHovering);
      }}
    />
  );
  const rsvp = <Rsvp isMobile={isMobile} />;
  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ju and Avery</title>
        <link rel="canonical" href="http://juandavery.com" />
      </Helmet>
      <img alt={`Site header`} style={{ height: "136px" }} src={Header} />
      {/* On mobile, put polaroid buttons in a single column; on desktop,
          put the buttons side by side. */}
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {carrboroPolaroid}
          {rsvp}
          {floripaPolaroid}
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {carrboroPolaroid}
            {floripaPolaroid}
          </div>
          {rsvp}
        </div>
      )}
      <img
        alt={`Registry`}
        style={{ width: "152px", margin: "8px" }}
        src={Registry}
      />
    </div>
  );
};

export default Index;
