import React from "react";
import Header from "./Header";
import Hangman from "./Hangman";

function App(){
  return (
    <React.Fragment>
      <Header />
      <Hangman />
    </React.Fragment>
  );
}

export default App;