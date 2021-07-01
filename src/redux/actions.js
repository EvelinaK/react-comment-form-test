import { createAction } from "@reduxjs/toolkit";

export const fetchCommentRequest = createAction("page/fetchCommentRequest");
export const fetchCommentSuccess = createAction("page/fetchCommentSuccess");
export const fetchCommentError = createAction("page/fetchCommentError");

export const addCommentRequest = createAction("page/addCommentRequest");
export const addCommentSuccess = createAction("page/addCommentSuccess");
export const addCommentError = createAction("page/addCommentError");

export const showCommentRequest = createAction("page/showCommentRequest");
export const showCommentSuccess = createAction("page/showCommentSuccess");
export const showCommentError = createAction("page/showCommentError");

export const postCommentRequest = createAction("page/postCommentRequest");
export const postCommentSuccess = createAction("page/postCommentSuccess");
export const postCommentError = createAction("page/postCommentError");

export const changeFilter = createAction("page/changeFilter");
