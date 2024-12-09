import React from "react";

const Phone = () => {
  return (
    <svg
      width="17"
      height="21"
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer phone body */}
      <rect
        x="3"
        y="1"
        width="11"
        height="19"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Screen */}
      <rect
        x="5"
        y="3"
        width="7"
        height="13"
        fill="currentColor"
        rx="1"
      />
      {/* Speaker */}
      <rect
        x="6"
        y="2.5"
        width="5"
        height="1"
        fill="currentColor"
        rx="0.5"
      />
      {/* Home Button */}
      <circle
        cx="8.5"
        cy="18"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
};

export default Phone;
