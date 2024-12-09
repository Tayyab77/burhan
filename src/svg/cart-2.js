import React from "react";

const CartTwo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cart body */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 18C5 17.4477 5.44772 17 6 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cart frame */}
      <path
        d="M4 4L5.5 9.5H18.5L20 4H4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Trolley wheels */}
      <circle cx="6" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Shirt hanging from the cart */}
      <path
        d="M8 6L9 7L9 8L10 8L10 7L11 6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Pants hanging from the cart */}
      <path
        d="M13 6L14 7L14 8L15 8L15 7L16 6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Cart handle */}
      <path
        d="M18 4L19 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartTwo;
