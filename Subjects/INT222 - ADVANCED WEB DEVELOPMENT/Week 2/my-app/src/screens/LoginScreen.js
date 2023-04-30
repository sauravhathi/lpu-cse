import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Auth.css";
import { handleAuthInputChange } from "../Utilities";

const LoginScreen = () => {
  const [state, setState] = useState({ email: "", password: "" });

  return (
    <>
      <div className={"auth-section"}>
        <h1>Login to My-App</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(state);
          }}
        >
          <div className={"form-el"}>
            <label className={"form-label"}>Email: </label>
            <input
              className={"form-input"}
              name={"email"}
              type={"email"}
              onChange={handleAuthInputChange({ state, setState })}
              value={state.email}
            />
          </div>
          <div>
            <label className={"form-label"}>Password: </label>
            <input
              className={"form-input"}
              name={"password"}
              type={"password"}
              value={state.password}
              onChange={handleAuthInputChange({ state, setState })}
            />
          </div>
          <div>
            <button className={"btn"} type={"submit"}>
              Login!
            </button>
          </div>
        </form>
        <div>
          <Link to={"/sign-up"}>
            <button className={"btn"}>Not a User? SignUp</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;

// useState is a hook that brings the functionality of state in func comp
// It takes 1 argument, which is the default or initial value of the state
// It returns an array with 2 elements.
// The first is the state variable
// The second is a setter for this state variable
