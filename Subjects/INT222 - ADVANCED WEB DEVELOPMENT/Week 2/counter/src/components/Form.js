import { Component } from "react";
import { PAN_REGEX } from "../Constants";

class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    panNumber: "",
    phoneNumber: "",
  };

  readFormInput = (e) => {
    let { name, value } = e.target;
    if (name === "phoneNumber") {
      value = Number(value);
      if (isNaN(value)) {
        value = "";
      }
    }
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (!this.state.panNumber.match(PAN_REGEX)) {
        //   console.log("Incorrect PAN");
        // }
        console.log("Submitted!", this.state);
      }}
    >
      <div>
        <label>Name: </label>
        <input
          type={"text"}
          name={"name"}
          placeholder={"Enter your name"}
          onChange={this.readFormInput}
          value={this.state.name}
          required={true}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type={"email"}
          name={"email"}
          placeholder={"Enter your email"}
          onChange={this.readFormInput}
          value={this.state.email}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type={"password"}
          name={"password"}
          placeholder={"Enter your password"}
          onChange={this.readFormInput}
          value={this.state.password}
          required={true}
          minLength={8}
        />
      </div>
      <div>
        <label>Phone Number: </label>
        <input
          type={"number"}
          name={"phoneNumber"}
          placeholder={"Enter your number"}
          onChange={this.readFormInput}
          value={this.state.phoneNumber}
        />
      </div>
      <div>
        <label>PAN Number: </label>
        <input
          type={"text"}
          name={"panNumber"}
          placeholder={"Enter your panNumber"}
          onChange={this.readFormInput}
          value={this.state.panNumber}
          pattern={PAN_REGEX}
        />
      </div>
      <div>
        <button type={"submit"}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
