import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "../slices/courseSlice";
import formSlice from "../slices/formSlice";

const store = configureStore({
  reducer: {
    courses: courseSlice,
    form: formSlice,
  },
});

export default store;


// kurstaki formReducer benim projemde formSlice olacak