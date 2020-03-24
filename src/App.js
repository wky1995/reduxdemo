import { Button, Input, List } from "antd";
import React, { PureComponent } from "react";
import store from "./store/store";

class App extends PureComponent {
  storeChange = () => {
    this.setState(store.getState());
  };
  onChange = e => {
    const action = {
      type: "changeInput",
      value: e.target.value
    };
    store.dispatch(action);
  };
  AddClick = () => {
    const action = {
      type: "addItem"
    };
    store.dispatch(action);
  };
  deleteItem = (index) => {
    const action = {
      type: "deleteItem"
      index
    };
    store.dispatch(action);
  };

  render() {
    this.state = store.getState();
    store.subscribe(this.storeChange);
    return (
      <div>
        <div>
          <Input onChange={this.onChange} />
          <Input placeholder={this.state.inputValue} />
          <Button onClick={this.AddClick}>增加</Button>
        </div>
        <div>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
