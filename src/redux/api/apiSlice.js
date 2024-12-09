import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//The apiSlice (created with createApi) handles API interactions and automatically integrates
//with the Redux store.The store update is handled internally by Redux Toolkit Query. 
//[apiSlice.reducerPath]: apiSlice.reducer
//is typically defined in the Redux store setup file (commonly store.js or store.ts). 
//It is required to connect the apiSlice to the Redux store so that the fetched data and state managed by Redux Toolkit Query (RTK Query) are integrated into your application's state.
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      try {
        const userInfo = Cookies.get('userInfo');
        if (userInfo) {
          const user = JSON.parse(userInfo);
          if (user?.accessToken) {
            headers.set("Authorization", `Bearer ${user.accessToken}`);
          }
        }
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Products","Coupon","Product","RelatedProducts","UserOrder","UserOrders","ProductType","OfferProducts","PopularProducts","TopRatedProducts"]
});