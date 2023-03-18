import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    list: [],
  },
  reducers: {
    setCocktailsList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCocktailsList } = cocktailSlice.actions;

export default cocktailSlice.reducer;

export const fetchAllCocktails = () => (dispatch) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    .then((response) => {
      dispatch(setCocktailsList(response.data.drinks));
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
