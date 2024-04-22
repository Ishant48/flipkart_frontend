import axios from "axios";
import * as actionType from '../constants/cartConstants';

const URL = "https://flipkart-backend-y0q0.onrender.com";

export const addToCart = (id,quantity) => async (dispatch) => {
  try {
    const {data} = await axios.get(`${URL}/product/${id}`);
    dispatch({type:actionType.ADD_TO_CART , payload:{...data,quantity}});
  } catch (error) {
    console.log("Error while calling addToCart api:::",error);
    dispatch({type:actionType.ADD_TO_CART_ERROR ,payload:error});
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
      dispatch({ type: actionType.REMOVE_FROM_CART,payload:id });

  } catch (error) {
      dispatch({ type: actionType.REMOVE_FROM_CART_ERROR, payload: error.response});

  }
};
