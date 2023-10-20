import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {},
});

export const {} = courseSlice.actions; // tanımladığımız reducersları ekliyoruz buraya

export default courseSlice.reducer;
