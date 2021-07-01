import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
  changeFilter,
  fetchCommentRequest,
  fetchCommentSuccess,
  fetchCommentError,
  showCommentRequest,
  showCommentSuccess,
  postCommentRequest,
  postCommentSuccess,
} from "./actions";

const items = createReducer([], {
  [fetchCommentSuccess]: (_, { payload }) => payload,
  [addCommentSuccess]: (state, { payload }) => [...state, payload],
});

const comments = createReducer([], {
  [fetchCommentSuccess]: (_, { payload }) => payload.data,
  [addCommentSuccess]: (state, { payload }) => [...state, ...payload.data],
  [postCommentRequest]: (_, { payload }) => payload,
  [postCommentSuccess]: (state, { payload }) => [...state, payload],
  [showCommentRequest]: (_, { payload }) => payload,
  [showCommentSuccess]: (state, { payload }) => [...state, ...payload.data],
});

const loading = createReducer(false, {
  [fetchCommentRequest]: () => true,
  [fetchCommentSuccess]: () => false,
  [fetchCommentError]: () => false,
  [addCommentRequest]: () => true,
  [addCommentSuccess]: () => false,
  [addCommentError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  comments,
  filter,
  loading,
  error,
});
