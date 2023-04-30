import React from "react";
import ListItem from "./ListItem";

const List = () => {
  let items = [
    {
      name: "Toothbrush",
      price: "$5.00",
    },
    {
      name: "Toothpaste",
      price: "$3.00",
    },
    {
      name: "Butter",
      price: "$4.00",
    },
    {
      name: "Milk",
      price: "$2.00",
    },
  ];

  return (
    <div>
      <h1>Shopping List</h1>
      {items.map((item, index) => (
        <ListItem key={index} myItem={item} name={"Shantanu"} />
      ))}
    </div>
  );
};

export default List;

// Create 3 components:
// 1. HomeScreen
// 2. List
// 3. ListItem

// HomeScreen will have 2 lists: Shopping List and Grocery List
// Pass array of items from HomeScreen to List and from List to ListItem 1 by 1
// ListItem should have name and price props
// List should have a key prop that is the index of the item in the array
// ListItem should have a key prop that is the index of the item in the array
// Try to style them by writing some external CSS
