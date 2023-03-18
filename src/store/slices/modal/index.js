import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    idDrink: 0,
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.open = action.payload;
    },
    setIdDrink: (state, action) => {
      state.idDrink = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;
export const { setIdDrink } = modalSlice.actions;

export default modalSlice.reducer;

export const stateModal = (id) => (dispatch) => {
  dispatch(setModalOpen(true));
  dispatch(setIdDrink(id));
};

export const stateModalClose = () => (dispatch) => {
  dispatch(setModalOpen(false));
};
