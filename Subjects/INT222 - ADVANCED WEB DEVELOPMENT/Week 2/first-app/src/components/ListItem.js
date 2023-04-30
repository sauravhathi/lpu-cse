import React from "react";

const ListItem = ({ myItem: aditya }) => {
  return (
    <div>
      <h3>Name is: {aditya.name}</h3>
      <span>Price is: {aditya.price}</span>
    </div>
  );
};

export default ListItem;
