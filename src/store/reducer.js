const defaultState = {
  inputValue: "writing something",
  list: [{ name: "1" }, { name: "2" }]
};
export default (state = defaultState, action) => {
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
