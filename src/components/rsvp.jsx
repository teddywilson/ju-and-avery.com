import React from "react";

import RsvpDesktop from "../assets/rsvp-desktop.jpg";
import RsvpMobile from "../assets/rsvp-mobile.png";

const Rsvp = ({ isMobile }) => {
  return (
    <div>
      <img
        alt={`Pointers indicating where RSVP buttons are`}
        style={{
          width: "96px",
          cursor: "initial",
        }}
        src={isMobile ? RsvpMobile : RsvpDesktop}
      />
    </div>
  );
};

export default Rsvp;
