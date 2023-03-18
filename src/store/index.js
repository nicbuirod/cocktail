import { configureStore } from "@reduxjs/toolkit";
import cocktails from "./slices/cocktails";
import modal from "./slices/modal";

export default configureStore({
  reducer: {
    cocktails,
    modal,
  },
});
