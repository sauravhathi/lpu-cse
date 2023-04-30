import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../css/Counter.scss";

const Title = styled.h1`
  background-color: pink;
  color: red;
`;

class Counter extends Component {
  state = {
    count: this.props.count,
    isVisible: false,
    items: [],
    filters: []
  };

  componentDidMount = () => {
    console.log("Counter was mounted.");
    // let foundItems = To fetch a list of items
    // this.setState({...this.state, items: foundItems})
  };

  componentDidUpdate = (previousProps, previousState, snapshot) => {
    console.log("Counter was updated!");
  };

  getSnapshotBeforeUpdate = (previousProps, previousState) => {
    console.log("Component about to update!");
    return "My name is Shantanu";
  };

  componentWillUnmount = () => {
    console.log("The Component is about to die");
  };

  toggleVisibility = () =>
    this.setState({ ...this.state, isVisible: !this.state.isVisible });

  render() {
    if (this.state.isVisible) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Toggle Visibility</button>
          <h1 className={"counter"}> The count is: {this.state.count}</h1>
          <button
            onClick={() => {
              this.setState({ ...this.state, count: this.state.count + 1 });
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              this.setState({ ...this.state, count: this.state.count - 1 });
            }}
          >
            Decrease
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(e);
              this.props.changeName("Shantanu");
            }}
          >
            Change Name
          </button>
        </div>
      );
    } else {
      return <button onClick={this.toggleVisibility}>Toggle Visibility</button>;
    }
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default Counter;

// State:
// A state is a property of a component that is used to store data.
// It stores that data which can change over a period of time.
// If we want to show info on the screen on the basis of changing data,
// then that data is kept in state
// A change in state will cause a re-render of the component and it is mandatory.
// A change in state must be handled by a method setState()
// setState() is a method that is used to change the state of a component.
// While using state, it is always a good practice to use an object.
// While changing state, the reference of the old and new state must be different.

// [{count: 0}][{count: 1}][]
//                  s

// Create 2 components.
// 1. Item Screen
// 2. Item

// 1. Item Screen has an array of items which are not loaded instantly.
// 2. When the user clicks on button Load, the array of items is loaded.
// 3. Show every item by using item component
// 4. Increase/Decrease the count of the item when the user clicks on it.
// 5. Item count value must be greater than 0

// int a = "Shantanu";

// onClick
// onChange
// onInput

// onKeyPress
// onKeyDown
// onKeyUp

// [Shantanu_________]

// Task
// 1. Create a react component, which has 1 blue div
// 2. When you press any key on the keyboard on the div,
// 3. Maintain a state, and print all the keys you have pressed
// Hint: Use state, and onKeyPress, use class based comp.
// [###########]
// SHANTANU
