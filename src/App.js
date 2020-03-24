import { Button, Input, List } from "antd";
import React, { PureComponent } from "react";
import store from "./store/store";

class App extends PureComponent {
  storeChange = () => {
    this.setState(store.getState());
  };
  onChange = e => {
    console.log(e.target.value);
    const action = {
      type: "changeInput",
      value: e.target.value
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
          <Button onClick={this.onClick}> 提交</Button>
        </div>
        <div>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item.name}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default App;
