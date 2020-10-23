import { GET_RANDOM_JOKE_SUCCESS, GET_RANDOM_JOKE_ERROR } from "./actionTypes";

const initialState = {
  id: 45,
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_JOKE_SUCCESS: {
      return {
        ...state,
        joke: payload.joke,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
