import React, { Component } from "react";
import "antd/dist/antd.css";

import { Input, Button, List } from "antd";
class TodolistUI extends Component {
  render() {
    console.log(this.props.inputValue);

    return (
      <div>
        <div>
          <Input onChange={this.props.onChange} />
          <Input placeholder={this.props.inputValue} />
          <Button onClick={this.props.AddClick}>增加</Button>
        </div>
        <div>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => this.props.deleteItem(index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodolistUI;
