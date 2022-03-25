import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import roomReducer from "./reducers/roomReducer";
import GameReducer from "./reducers/gameReducer";

const rootReducer = combineReducers({
  room: roomReducer,
  game: GameReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
