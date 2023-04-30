import { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Auth.css";
import { handleAuthInputChange } from "../Utilities";

class SignUpScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  render = () => (
    <>
      <div className={"auth-section"}>
        <h1>Welcome to My-App</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(this.state);
          }}
        >
          <div className={"form-el"}>
            <label className="form-label">Name: </label>
            <input
              className="form-input"
              name={"name"}
              type={"text"}
              value={this.state.name}
              onChange={handleAuthInputChange(this)}
            />
          </div>
          <div className="form-el">
            <label className="form-label">Email: </label>
            <input
              className="form-input"
              name={"email"}
              type={"email"}
              value={this.state.email}
              onChange={handleAuthInputChange(this)}
            />
          </div>
          <div className="form-el">
            <label className="form-label">Password: </label>
            <input
              className="form-input"
              name={"password"}
              type={"password"}
              value={this.state.password}
              onChange={handleAuthInputChange(this)}
            />
          </div>
          <div className="form-el">
            <button className="btn" type={"submit"}>
              SignUp!
            </button>
          </div>
        </form>
        <div>
          <Link to={"/login"}>
            <button className="btn">Already a User? Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpScreen;
