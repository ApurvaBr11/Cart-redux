import axios from "axios";

export const fetchdata = ()=> async (dispatch) => {
  try {
    dispatch({
      type: "get-data",
    });
    const resp = await axios.get(
      "https://products-data.vercel.app/Cardsdata"
    );
    dispatch({ type: "get-data-sucess", payload: resp.data });
    
  } catch (error) {
    dispatch({
      type: "get-data-fail",
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ADD = (item) => {
  return {
    type: "add",
    payload: item,
  };
};
export const RMV = (id) => {
  return {
    type: "rmv",
    payload: id,
  };
};

export const DECRE = (iteam) => {
  return {
    type: "decre",
    payload: iteam,
  };
};
