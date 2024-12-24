import { createSlice, current } from "@reduxjs/toolkit";
import e from "express";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
