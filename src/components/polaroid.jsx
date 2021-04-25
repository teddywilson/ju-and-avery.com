import React from "react";

const STYLE = {
  alignSelf: "center",
  cursor: "pointer",
};

const MOBILE_STYLE = {
  ...STYLE,
  width: "75%",
  margin: "8px",
};

const DESKTOP_STYLE = {
  ...STYLE,
  width: "25%",
  margin: "16px",
};

const OPACITY_DIM = 0.4;
const OPACITY_REGULAR = 1.0;

const Polaroid = ({ isMobile, source, url, onHover, dim }) => {
  const style = {
    ...(isMobile ? MOBILE_STYLE : DESKTOP_STYLE),
    opacity: dim ? OPACITY_DIM : OPACITY_REGULAR,
  };
  return (
    <div
      className="button-no-outline"
      style={style}
      onClick={() => {
        window.open(url);
      }}
      onMouseEnter={() => {
        onHover(true);
      }}
      onMouseLeave={() => {
        onHover(false);
      }}
      role="button"
      tabIndex="0"
    >
      <img
        alt={`Polaroid button for ${url}`}
        src={source}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Polaroid;
