'use client';
import React, { useEffect, useState } from "react";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { ShapeLine, TabLine } from "@/svg";
import ProductItem from "./product-item";
import ErrorMsg from "@/components/common/error-msg";
import HomePrdLoader from "@/components/loader/home/home-prd-loader";

//Define an array of tab names for product categories or filters
const tabs = ["new", "featured", "topSellers"];

const ProductArea = () => {
  // Define a state variable `activeTab` to track the currently selected tab, defaulting to "new"
  const [activeTab, setActiveTab] = useState("new");

//The response object returned by this hook contains several properties. Here, destructuring is used to extract four 
//specific ones:
//data: The fetched data, data renamed to products
//isError: A boolean indicating whether an error occurred during the request.
//isLoading: A boolean indicating whether the data is still being fetched.
//refetch: A function that allows the manual re-triggering of the API request.
// A function to re-execute the API call manually.
// Helpful when external factors (e.g., activeTab changes) need to trigger a data refresh.

  const {data:products,isError,isLoading,refetch} = 
// The useGetProductTypeQuery is a custom hook (likely generated using a library like Redux Toolkit's RTK Query) 
//that fetches data from an API.
//The useGetProductTypeQuery hook is called with an object containing two key-value pairs:
//type: 'electronics': This specifies the category of products to fetch. Here, it’s filtering for electronics.
//query: ${activeTab}=true: A dynamic query string constructed using the activeTab value. This indicates additional 
//filtering based on the active tab (e.g., "new", "featured", or "topSellers"). The ${activeTab} placeholder dynamically 
//injects the current tab name.
useGetProductTypeQuery({type:'electronics',query:`${activeTab}=true`});

//handleActiveTab: The function name indicates its purpose—to handle the change of the active tab.
//tab: A parameter representing the new tab that the user has selected. It could be a string like 
//"new", "featured", or "topSellers".
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

//Purpose of useEffect:
//useEffect is a React Hook that allows you to perform side effects in functional components, such as fetching data, 
//updating the DOM, or setting up subscriptions. 
//Effect Function:
//The function inside useEffect (refetch() in this case) will execute whenever the dependencies in the dependency array change.
//Dependencies:
//[activeTab, refetch]:
//useEffect will re-run the effect only when activeTab or refetch changes.
//This ensures the effect is not triggered unnecessarily but only when the active tab updates or the refetch function reference changes.
//refetch Function:
//refetch() is typically provided by a data-fetching library (like RTK Query or Apollo).
//It is used to fetch updated data from the server. In this case, it fetches new products based on the current activeTab.
  useEffect(() => {
    refetch()
  },[activeTab,refetch])

  // Decide what to render based on loading, error, or product data
  let content = null;

  // If the data is still loading, display a loader component
  if (isLoading) {
    content = (
  // HomePrdLoader is a component that shows a loading animation or indicator
      <HomePrdLoader loading={isLoading}/>
    );
  }
  // If loading is complete and there is an error, display an error message
  if (!isLoading && isError) {
  //ErrorMsg is a component that displays the provided error message to the user  
    content = <ErrorMsg msg="There was an error" />;
  }
  // If loading is complete, no errors occurred, but no products are found, show a 'No Products' message
  if (!isLoading && !isError && products?.data?.length === 0) {
  // Indicates that the query returned successfully but without any products  
    content = <ErrorMsg msg="No Products found!" />;
  }

  // If loading is complete, no errors occurred, and products are available, render the product list
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data; // Retrieve product data from the API response
    content = product_items.map((prd,i) => (
      <div key={i} className="col-xl-3 col-lg-3 col-sm-6">
        <ProductItem product={prd}/>  
   {/* ProductItem is a component that renders individual product details */}      
    </div>
    ))
  }

  return (
    <section className="tp-product-area pb-55">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-lg-6 col-md-5">
            <div className="tp-section-title-wrapper mb-40">
              <h3 className="tp-section-title">
                Trending Products
                <ShapeLine />
              </h3>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-7">
            <div className="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end">
              <ul className="nav nav-tabs justify-content-sm-end">
                {tabs.map((tab, i) => (
                  <li key={i} className="nav-item">
                    <button
                      onClick={() => handleActiveTab(tab)}
                      className={`nav-link text-capitalize ${
                        activeTab === tab ? "active" : ""
                      }`}
                    >
                      {tab.split("-").join(" ")}
                      <span className="tp-product-tab-line">
                        <TabLine />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
