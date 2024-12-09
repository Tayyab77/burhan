'use client';
// Imports React for building components and `useState` for managing component-level state.
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Imports Redux hooks: `useSelector` to access the Redux state and `useDispatch` to dispatch 
//actions to the Redux store.
import { useDispatch, useSelector } from "react-redux";
// internal
import Menus from "./header-com/menus";
import useSticky from "@/hooks/use-sticky";
import logo from "@assets/img/logo/logo.svg";
import useCartInfo from "@/hooks/use-cart-info";
import OffCanvas from "@/components/common/off-canvas";
import { openCartMini } from "@/redux/features/cartSlice";
import HeaderCategory from "./header-com/header-category";
import HeaderTopRight from "./header-com/header-top-right";
import HeaderMainRight from "./header-com/header-main-right";
import CartMiniSidebar from "@/components/common/cart-mini-sidebar";
import HeaderSearchForm from "@/components/forms/header-search-form";
import { CartTwo, CategoryMenu, Compare, Menu, Phone, ShippingCar, Wishlist } from "@/svg";

const Header = () => {

  //Below slice name is wishlist and property name is wishlist?
  const { wishlist } = useSelector((state) => state.wishlist);
// useState is a React hook that manages state in a functional component.
// isOffCanvasOpen is the state variable, which holds the current value (initially set to false).
// setIsCanvasOpen is the function used to update the value of isOffCanvasOpen.
// false is the initial value of the isOffCanvasOpen state.
// This state controls whether an off-canvas component (like a sidebar or menu) is open or closed.
// By default, the off-canvas is closed (false).
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
// seCartInfo is a custom React hook that retrieves cart-related information.
// This hook likely returns an object containing various cart details, such as quantity, 
// totalPrice, or items.
// { quantity } is object destructuring, extracting the quantity property from the object
// returned by useCartInfo.
// The variable quantity now holds the number of items in the cart.
// The data from useCartInfo could come from context, Redux, or another state management system.
  const { quantity } = useCartInfo();
//useSticky is a custom React hook designed to manage or provide information about a "sticky" 
//behavior or state (e.g., for UI elements like headers).
//{ sticky } uses object destructuring to extract the sticky property from the object returned by 
//the useSticky hook.The sticky variable now holds the value that determines whether the element 
//is in a "sticky" state (true or false).
//This value might be based on scroll position or other conditions.
//It simplifies UI logic by making it easy to toggle or style components based on their sticky state.
  const { sticky } = useSticky();
// useDispatch is a React-Redux hook that provides access to the Redux store's dispatch function.
// The dispatch function is used to send actions to the Redux store, triggering state updates based
// on reducers.const dispatch = useDispatch(); assigns the dispatch function to a local variable 
// dispatch. You can then use dispatch to invoke specific actions, such as dispatch(addToCart(item)).
// It is essential for interacting with the Redux store to modify state or initiate side effects.  
const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className="tp-header-area p-relative z-index-11">

      {/* header main start with Shofy logo */}
{/* header main start with Shofy logo */}
<div className="tp-header-main tp-header-sticky">
  {/* The tp-header-main class defines the overall styling for the header */}
  {/* tp-header-sticky makes the header stick to the top when the user scrolls down */}

  <div className="container">
    {/* The container class provides a responsive fixed-width container for the header */}

    <div className="row align-items-center">
      {/* The row class creates a flexbox container for the columns */}
      {/* align-items-center centers the content vertically within the row */}

      {/* Left side - Logo */}
      {/* This section contains the logo, which links to the homepage */}
      <div className="col-xl-2 col-lg-2 col-md-4 col-6">
        {/* col-xl-2 defines the column width for extra-large screens (2/12) */}
        {/* col-lg-2 defines the column width for large screens (2/12) */}
        {/* col-md-4 defines the column width for medium screens (4/12) */}
        {/* col-6 defines the column width for smaller screens (6/12) */}
        {/* These classes make the logo responsive based on screen size */}

        <div className="logo">
          {/* logo class applies specific styling to the logo */}
          <Link href="/">
            {/* Link component makes the logo clickable and navigates to the homepage */}
            <h3>Al Burhan</h3>
            {/* h3 tag renders the text "Al Burhan" as the logo */}
          </Link>
        </div>
      </div>

      {/* Center - Blank Space */}
      {/* This section creates an empty center space. It is visible only on medium-sized screens and above */}
      <div className="col-xl-8 col-lg-7 col-md-4 d-none d-md-block">
        {/* col-xl-8 defines the column width for extra-large screens (8/12) */}
        {/* col-lg-7 defines the column width for large screens (7/12) */}
        {/* col-md-4 defines the column width for medium screens (4/12) */}
        {/* d-none hides the column on small screens */}
        {/* d-md-block displays the column on medium and larger screens */}
        {/* This ensures a centered blank space between the logo and the right-side elements */}
      </div>

      {/* Right side - Cart, Sign In, and other user-related elements */}
      {/* This section contains the user-related items such as cart, sign-in, etc. */}
      <div className="col-xl-2 col-lg-3 col-md-4 col-6">
        {/* col-xl-2 defines the column width for extra-large screens (2/12) */}
        {/* col-lg-3 defines the column width for large screens (3/12) */}
        {/* col-md-4 defines the column width for medium screens (4/12) */}
        {/* col-6 defines the column width for smaller screens (6/12) */}
        {/* These classes ensure that the right side section has appropriate width at different screen sizes */}

        {/* The HeaderMainRight component is responsible for rendering the user interaction elements */}
        <HeaderMainRight setIsCanvasOpen={setIsCanvasOpen} />
      </div>
    </div>
  </div>
</div>


          {/* header - All Deprtments and Menu */}
          <div className="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
            <div className="container">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3">
                    {/* category start */}
                    <div className="tp-header-category tp-category-menu tp-header-category-toggle">
                      <button
                        onClick={() => setIsCategoryActive(!isCategoryActive)}
                        className="tp-category-menu-btn tp-category-menu-toggle"
                      >
                        <span>
                          <CategoryMenu />
                        </span>
                        All Departments
                      </button>
                      <nav className="tp-category-menu-content">
                        <HeaderCategory categoryType="electronics" isCategoryActive={isCategoryActive} />
                      </nav>
                    </div>
                    {/* category end */}
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu menu-style-1">
                      <nav className="tp-main-menu-content">
                        {/* These are menus Home Products Shop */}
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3">
                    <div className="tp-header-contact d-flex align-items-center justify-content-end">
                      <div className="tp-header-contact-icon">
                        <span>
                          <Phone />
                        </span>
                      </div>
                      <div className="tp-header-contact-content">
                        <h5>Hotline:</h5>
                        <p>
                          <a href="tel:402-763-282-46">+(402) 763 282 46</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* sticky header start when scroll above */}
      <div id="header-sticky-2" className={`tp-header-sticky-area ${sticky ? 'header-sticky-2' : ''}`}>
        <div className="container">
          <div className="tp-mega-menu-wrapper p-relative">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-block">
                <div className="tp-header-sticky-menu main-menu menu-style-1 d-none d-lg-block">
                  <nav id="mobile-menu">
                    <Menus />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="tp-header-action d-flex align-items-center justify-content-end ml-50">
                  <div className="tp-header-action-item d-none d-lg-block">
                    <Link href="/compare" className="tp-header-action-btn">
                      <Compare />
                    </Link>
                  </div>
                  <div className="tp-header-action-item d-none d-lg-block">
                    <Link href="/wishlist" className="tp-header-action-btn">
                      <Wishlist />
                      <span className="tp-header-action-badge">{wishlist.length}</span>
                    </Link>
                  </div>
                  <div className="tp-header-action-item">
                    <button onClick={() => dispatch(openCartMini())} type="button" className="tp-header-action-btn cartmini-open-btn">
                      <CartTwo />
                      <span className="tp-header-action-badge">{quantity}</span>
                    </button>
                  </div>
                  <div className="tp-header-action-item d-lg-none">
                    <button onClick={() => setIsCanvasOpen(true)} type="button" className="tp-header-action-btn tp-offcanvas-open-btn">
                      <Menu />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sticky header end */}

      {/* cart mini sidebar start, appeares when click on cart*/}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="electronics" />
      {/* off canvas end */}
    </>
  );
};

export default Header;
