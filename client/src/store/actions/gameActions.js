export const GameStates = {
  Landing: "Landing",
  Waiting: "Waiting",
  Drawing: "Drawing",
  Result: "Result",
};

export const gameActions = {
  // This action is used to set the game state.
  SET_GAME_STATE: "GAME.SET_GAME_STATE",
};

export const getActions = (dispatch) => {
  return {
    setGameState: (gameState) => {
      dispatch(setGameState(gameState));
    },
  };
};

export const setGameState = (gameState) => {
  return {
    type: gameActions.SET_GAME_STATE,
    gameState,
  };
};
