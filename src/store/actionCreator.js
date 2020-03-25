import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST } from "./reducerType";

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});

export const getListAction = list => ({
  type: GET_LIST,
  list
});
