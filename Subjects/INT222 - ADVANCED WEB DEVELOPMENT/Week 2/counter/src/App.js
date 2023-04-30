import { Component } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";

class App extends Component {
  state = {
    name: "This is a Counter Application",
    isVisible: true,
  };

  changeName = (name) => this.setState({ ...this.state, name });

  render() {
    // if (this.state.isVisible) {
    //   return (
    //     <div>
    //       <h1>{this.state.name}</h1>
    //       <button
    //         onClick={() =>
    //           this.setState({ ...this.state, isVisible: !this.state.isVisible })
    //         }
    //       >
    //         Toggle
    //       </button>
    //       <Counter count={5} changeName={this.changeName} />
    //       {/* <Counter count={10} changeName={this.changeName} /> */}
    //     </div>
    //   );
    // }
    // return (
    //   <button
    //     onClick={() =>
    //       this.setState({ ...this.state, isVisible: !this.state.isVisible })
    //     }
    //   >
    //     Toggle
    //   </button>
    // );
    return <Form />;
  }
}

export default App;
