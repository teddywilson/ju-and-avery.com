import React from "react";

const STYLE = {
  alignSelf: "center",
  cursor: "pointer",
};

const MOBILE_POLAROID_STYLE = {
  ...STYLE,
  width: "75%",
  margin: "8px",
};

const DESKTOP_POLAROID_STYLE = {
  ...STYLE,
  width: "25%",
  margin: "16px",
};

const Polaroid = ({
  isMobile,
  source,
  url,
  emoji,
  emojiOnTop,
  onHover,
  dim,
}) => {
  const emojiSpan = (
    <span
      style={{
        fontSize: "24px",
      }}
    >
      {emoji}
    </span>
  );
  const style = {
    ...(isMobile ? MOBILE_POLAROID_STYLE : DESKTOP_POLAROID_STYLE),
    opacity: dim ? 0.4 : 10.0,
  };
  return (
    <div
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
      <div hidden={!emojiOnTop}>{emojiSpan}</div>
      <img
        alt={`Polaroid button for ${url}`}
        src={source}
        style={{ width: "100%" }}
      />
      <div hidden={emojiOnTop}>{emojiSpan}</div>
    </div>
  );
};

export default Polaroid;
