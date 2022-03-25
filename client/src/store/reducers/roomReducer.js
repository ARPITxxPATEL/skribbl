import { roomActions } from "../actions/roomActions";

const initState = {
  roomId: null,
};

const roomReducer = (state = initState, action) => {
  switch (action.type) {
    case roomActions.SET_ROOM_DETAILS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default roomReducer;
