'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// internal
import ErrorMsg from '../common/error-msg';
import { useGetProductTypeCategoryQuery } from '@/redux/features/categoryApi';
import HomeCateLoader from '../loader/home/home-cate-loader';

//ElectronicCategory is an arrow function that serves as a React component(only one in this page)
// State/Logic: Using hooks like useGetProductTypeCategoryQuery and useRouter to manage data fetching and navigation.
// Rendering Logic: Conditional rendering based on the loading state, error state, or fetched data.
// Event Handling: The handleCategoryRoute function to handle user interactions (e.g., navigating to a category page).
// UI/JSX: The returned JSX structure that defines how the component will render on the page.
const ElectronicCategory = () => {
  // These hooks (useGetProductTypeCategoryQuery and useRouter) must be declared within the 
  // function body to be part of this component's lifecycle.
  //electronics is the argument passed to the useGetProductTypeCategoryQuery function.
  //The useGetProductTypeCategoryQuery function is likely a Redux Toolkit Query (RTK Query) 
  //hook that fetches product categories from the backend. 
 //The elements data: categories, isLoading, and isError are destructured variables extracted 
 //from the return value of the hook useGetProductTypeCategoryQuery('electronics') 
 //categories is a renamed variable for data using destructuring (data: categories).
//  Using const for const { data: categories, isLoading, isError } ensures that these variables 
//are immutable (their references cannot be reassigned). s the returned values are intended 
//to remain constant during the component's lifecycle.
  const { data: categories, isLoading, isError } = useGetProductTypeCategoryQuery('electronics');
  const router = useRouter()

  // handle category route
  // The function takes a single parameter, title(electronics), which represents the name of 
  //the category.
  const handleCategoryRoute = (title) => {
 //The router object (from useRouter) is used to programmatically navigate to a new page.
//router.push changes the URL to the /shop page, appending a query parameter for the   
//appending a query parameter for the category means adding the category name as part of the 
//URL after a ?. For example, /shop?category=electronics specifies that the "electronics" category 
//is selected. Query parameters are key-value pairs (e.g., category=electronics) appended to a URL 
//after a ?, separated by & if multiple parameters exist. This allows the backend or frontend to 
//identify and fetch data for the specified category. In this code, the category name is dynamically
//formatted and appended for clean and functional navigation.
// title.toLowerCase() converts the category name to lowercase.
// .replace("&", "") removes any ampersands (&) from the title.
// .split(" ").join("-") replaces spaces with hyphens to create a URL-friendly format.
    router.push(`/shop?category=${title.toLowerCase().replace("&", "").split(" ").join("-")}`)
    console.log(title)
  }
  // decide what to render
  let content = null;

  // This code checks if isLoading is true, indicating that the data is still being fetched. 
  // If so, it sets content to render the HomeCateLoader component. The loading prop is passed 
  // to the HomeCateLoader component to visually show a loading state. This ensures the user sees 
  // a loader instead of a blank or broken page while waiting for the API response. 
  // It's a conditional rendering pattern to handle the loading state gracefully.
  if (isLoading) {
    content = (
      <HomeCateLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && categories?.result?.length === 0) {
    content = <ErrorMsg msg="No Category found!" />;
  }

  if (!isLoading && !isError && categories?.result?.length > 0) {
//This line assigns the result array from the categories object to a new constant category_items.
    const category_items = categories.result;
   // Yes, if you have 5 categories, the item will represent each individual category in the 
  // category_items array as the map function iterates over it. The map method will loop through 
 // all 5 categories and pass each one as an item to the JSX inside the map callback.
// Regarding the declaration of item, you do not need to declare it explicitly. It's automatically 
// created by the map function as a reference to each individual element in the category_items array. 
// So, during each iteration, item represents the current category being processed in that loop.
//category name is populating with ategory_items, and its products are presented with item    
content = category_items.map((item) => (
// Where it comes from: The database (typically MongoDB or another database generating a unique ID).
// Why it's used: To provide a unique identifier for each item in the list, helping React efficiently manage DOM updates when the list changes.
      <div className="col" key={item._id}>
        {/* This div wraps the individual category item in a styled container. */}
        <div className="tp-product-category-item text-center mb-40">
        {/* This div is for the category's thumbnail image.
        The fix class likely applies specific styling or positioning.
        Purpose: To style and position the thumbnail image. */}
          <div className="tp-product-category-thumb fix">
      {/* An anchor (<a>) tag is used to make the image clickable. The cursor-pointer class changes 
          the mouse pointer to a hand when hovering over it, indicating interactivity. */}
 {/* The onClick event handler calls the handleCategoryRoute function with the category parent as 
    an argument.This function navigates to a new route when the category is clicked. */}
    {/* When we will click on Category function will be like handleCategoryRoute("Monitors"); */}
    {/* Data Structure:
In the array category_items, each object (item) typically contains a property parent that 
represents the category name. For example:
{
  "_id": "1",
  "parent": "Monitors",
  "img": "monitor.jpg",
  "products": ["Monitor1", "Monitor2"]
}       
Here, parent is explicitly storing the name of the category ("Monitors").    */}
{/* The equality (item.parent === category name) is inherently part of the data design and 
structure. It is not configured in your code explicitly but is rather a result of the 
way the data is prepared and used. */}
            <a className='cursor-pointer' onClick={() => handleCategoryRoute(item.parent)}>
  {/* The Image component from Next.js is used to display the category image (item.img).
  src={item.img} specifies the image URL, alt="product-category" is the alt text for accessibility,
  and width={76} height={98} define the image's dimensions.             */}
              <Image src={item.img} alt="product-category" width={76} height={98} />
            </a>
          </div>
          <div className="tp-product-category-content">
            <h3 className="tp-product-category-title">
            {/* Clicking the category name navigates to the category page, just like clicking the image. */}
              <a className='cursor-pointer' onClick={() => handleCategoryRoute(item.parent)}>
              {/* This dynamically inserts the category's name (item.parent) into the anchor tag.
              Purpose: Display the actual name of the category.        */}
                {item.parent}
              </a>
            </h3>
            {/* Display the count of products available in the category. */}
            <p>{item.products.length} Product</p>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <section className="tp-product-category pt-60 pb-15">
      <div className="container">
        <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ElectronicCategory;