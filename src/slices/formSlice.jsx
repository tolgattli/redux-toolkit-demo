import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers:{}
});

export const {} = formSlice.actions;
export default formSlice.reducer;