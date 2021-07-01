import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.page.loading;
export const getFilter = (state) => state.page.filter;
export const getAllCont = (state) => state.page.items;

export const getDat = (state) => state.page;
export const getAllComments = (state) => state.page.comments;
export const getVisibleComments = (state) => {
  const comments = getAllComments(state);
  return comments;
};
