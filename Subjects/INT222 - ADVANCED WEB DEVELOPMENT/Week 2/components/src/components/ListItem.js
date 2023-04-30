import { Component } from "react";
import "../css/listItem.css";

class ListItem extends Component {
  render() {
    return (
      this.props.item.price > 10 && (
        <div>
          <h1>
            The name is: {this.props.item.name} and the price is:{" "}
            <span className={this.props.item.price > 20 ? "high" : ""}>
              {this.props.item.price}
            </span>
          </h1>
        </div>
      )
    );
  }
}

export default ListItem;
