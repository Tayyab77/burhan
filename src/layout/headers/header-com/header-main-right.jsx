'use client';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
// internal
import useCartInfo from "@/hooks/use-cart-info";
import { CartTwo, Compare, Menu, Phone, Wishlist } from "@/svg";
import { openCartMini } from "@/redux/features/cartSlice";
import '../../../../public/assets/css/bar.css';


const HeaderMainRight = ({ setIsCanvasOpen }) => {
  const { Phone: phoneInfo } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  const dispatch = useDispatch();

  return (
    <div className="tp-header-main-right d-flex align-items-center justify-content-end">
      {/* Login Section */}
      <div className="tp-header-login d-none d-lg-flex align-items-center">
        {/* Phone Icon */}
        <div className="tp-header-login-icon">
          <Phone className="phone-icon" />
        </div>
        {/* "Hello" and Phone Number */}
        <div className="tp-header-login-content d-flex flex-column align-items-start">

          <span className="tp-header-number1">(+971) 55 2853 102</span>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="tp-header-action d-flex align-items-center ml-50">
        {/* Compare Button */}
        
        {/* Wishlist Button */}
       
        {/* Cart Button */}
        <div className="tp-header-action-item">
          <button
           
            type="button"
            className="tp-header-action-btn cartmini-open-btn"
          >
            <CartTwo />
            
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="tp-header-action-item d-lg-none">
          <button
            onClick={() => setIsCanvasOpen(true)}
            type="button"
            className="tp-header-action-btn tp-offcanvas-open-btn"
          >
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
};



export default HeaderMainRight;


