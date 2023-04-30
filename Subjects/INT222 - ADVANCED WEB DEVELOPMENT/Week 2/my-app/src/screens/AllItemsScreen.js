import { useEffect, useState } from "react";

const AllItemsScreen = () => {
  const [state, setState] = useState({
    items: [],
    name: "Shantanu",
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        items: [
          { id: 1, name: "Toothpaste" },
          { id: 2, name: "Toothbrush" },
        ],
      });
    }, 5000);
    return () => {
      // just before the component unmounts
      console.log("Unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update");
  });

  if (!state.items.length) {
    return <h1>Loading...</h1>;
  }
  return state.items.map((item, index) => (
    <div key={index}>
      <p>Item: {item.name}</p>
      <p>ID: {item.id}</p>
      <button onClick={(_e) => setState({ ...state, name: "Shubham" })}>
        Change name
      </button>
    </div>
  ));
};

export default AllItemsScreen;

// useEffect
// useEffect is a hook for functional components
// It is used to mock componentDidMount, componentDidUpdate and
// componentWillUnmount
// It behaves very similar to above functions, but not same!
// It takes, 2 arguments
// 1. [MANDATORY] A function that should execute when the component
// mounts or updates.
// 2. [OPTIONAL] An array of variables
// If you don't pass 2nd variable, useEffect will run for mounting
// and every update of the component
// If you pass an empty array, it will only run for mounting of the
// component and not on update
// If you pass an array of variables, it will run on mounting and only
// when the variables passed in the array update.

// The return type of the Argument no. 1, is a function that is executed when
// the component will unmount.

// useEffect(() => {
// useEffect logic
// return () => {} // logic for unmounting
//}, [ array of variables] )

// useEffect(effect: cleanup function, dependency)



// A user has 1,000 energy // state
// There is a list of pokemons available // state, useEffect
// Every pokemon requires a certain amount of energy to be caught
// Allow a user to catch a pokemon, by clicking on a button "Catch" //event handling
// If the pokemon is caught, add this to the list of caught pokemons by the user // state, useEffect
// If the pokemon is not caught, console log "Not Caught"
// Always show how much energy is remaining with the user. // state
// Refill the energy in every 10 mins // use setInterval and useEffect
// Show the list of pokemons using useEffect.

// OPTIONAL
// Remove the pokemon or reduce its count, if the pokemon is caught.
// Don't let a user catch 2 pokemons of the same type