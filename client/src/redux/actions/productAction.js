import axios from "axios";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS, GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_REQUEST, GET_PRODUCT_DETAIL_SUCCESS } from "../constants/productConstants";

const URL = "https://flipkart-backend-y0q0.onrender.com";

export const getProducts = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${URL}/products`);
    dispatch({type:GET_PRODUCTS_SUCCESS , payload:data.message});
  } catch (error) {
    console.log("Error while calling getProducts api:::",error);
    dispatch({type:GET_PRODUCTS_FAILURE ,payload:error});
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
      dispatch({ type: GET_PRODUCT_DETAIL_REQUEST });
      const { data } = await axios.get(`https://flipkart-backend-y0q0.onrender.com/product/${id}`);
      
      dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });

  } catch (error) {
      dispatch({ type: GET_PRODUCT_DETAIL_FAILURE, payload: error.response});

  }
};
