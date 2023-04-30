import { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  items = [
    {
      name: "Item 1",
      price: 10.0,
    },
    {
      name: "Item 2",
      price: 20.0,
    },
    {
      name: "Item 3",
      price: 30.0,
    },
  ];

  render() {
    return (
      <div>
        {this.items.map((currentItem, index) => (
          <ListItem key={index} item={currentItem} />
        ))}
      </div>
    );
  }
}

export default List;
