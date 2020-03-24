import store from "./store";

const defaultState = {
  inputValue: "writing something",
  list: ["1", "2"]
};
export default (state = defaultState, action) => {
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    console.log(newState.list.name);

    newState.inputValue = "";
    return newState;
    }
    if (action.type === "deleteItem") { 
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.
    }
  return state;
};
