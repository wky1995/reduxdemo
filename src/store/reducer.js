import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./reducerType";

const defaultState = {
  inputValue: "writing something",
  list: []
};
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    console.log(newState.list.name);

    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }
  return state;
};
