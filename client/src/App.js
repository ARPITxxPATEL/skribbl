import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import WaitingPage from "./components/WaitingPage/WaitingPage";
import DrawingPage from "./components/DrawingPage/DrawingPage";
import ResultPage from "./components/ResultPage/ResultPage";

import { connect } from "react-redux";
import { GameStates } from "./store/actions/gameActions";

const App = ({ gameState }) => {
  return (
    <>
      {gameState === GameStates.Landing && <LandingPage />}
      {gameState === GameStates.Waiting && <WaitingPage />}
      {gameState === GameStates.Drawing && <DrawingPage />}
      {gameState === GameStates.Result && <ResultPage />}
    </>
  );
};

const mapStoreStateToProps = ({ game }) => {
  return {
    ...game,
  };
};

export default connect(mapStoreStateToProps)(App);
