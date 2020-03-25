import React, { PureComponent } from "react";
import store from "./store/store";
import TodolistUI from "./UIComponent/TodolistUI";
import axios from "axios";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction
} from "./store/actionCreator";

class App extends PureComponent {
  componentDidMount() {
    axios.get("http://localhost:8000/list").then(res => {
      const list = res.data.list;
      const action = getListAction(list);
      store.dispatch(action);
    });
  }

  storeChange = () => {
    this.setState(store.getState());
  };
  onChange = e => {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  };
  AddClick = () => {
    const action = addItemAction();
    store.dispatch(action);
  };
  deleteItem = index => {
    const action = deleteItemAction(index);
    store.dispatch(action);
  };

  render() {
    this.state = store.getState();
    store.subscribe(this.storeChange);
    return (
      <TodolistUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        onChange={this.onChange}
        AddClick={this.AddClick}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default App;
