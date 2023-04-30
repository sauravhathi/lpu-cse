import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllItemsScreen from "./screens/AllItemsScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

class App extends Component {
  render = () => {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={""} element={<HomeScreen />} />
            <Route path={"/login"} element={<LoginScreen />} />
            <Route path={"/sign-up"} element={<SignUpScreen />} />
            <Route path={"/items"} element={<AllItemsScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;

// localhost:3000 -> HomeScreen
//  /login -> LoginScreen
//  /sign-up -> SignUpScreen
