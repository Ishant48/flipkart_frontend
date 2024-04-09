import axios from "axios";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../constants/productConstants";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${URL}/products`);
    dispatch({type:GET_PRODUCTS_SUCCESS , payload:data.message});
  } catch (error) {
    console.log("Error while calling getProducts api:::",error);
    dispatch({type:GET_PRODUCTS_FAILURE ,payload:error});
  }
};
