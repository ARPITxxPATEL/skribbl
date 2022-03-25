import { gameActions, GameStates } from "../actions/gameActions";

const initState = {
  gameState: GameStates.Landing,
};

export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case gameActions.SET_GAME_STATE:
      return {
        ...state,
        gameState: action.gameState,
      };
    default:
      return state;
  }
};

export default gameReducer;
