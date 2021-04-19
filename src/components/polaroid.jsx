import React from "react";

const STYLE = {
  alignSelf: "center",
  cursor: "pointer",
};

const MOBILE_POLAROID_IMAGE = {
  ...STYLE,
  maxWidth: "75%",
  margin: "8px",
};

const DESKTOP_POLAROID_IMAGE = {
  ...STYLE,
  maxWidth: "25%",
  margin: "16px",
};

const Polaroid = ({ isMobile, source, url, emoji }) => {
  return (
    <div
      style={isMobile ? MOBILE_POLAROID_IMAGE : DESKTOP_POLAROID_IMAGE}
      onClick={() => {
        window.open(url);
      }}
      role="button"
      tabIndex="0"
    >
      <div>
        <span
          style={{
            fontSize: "24px",
          }}
        >
          {emoji}
        </span>
      </div>
      <img
        alt={`Polaroid button for ${url}`}
        src={source}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Polaroid;
