import { GET_RANDOM_JOKE } from "./actionTypes";

export const getRandomJoke = () => {
  return {
    type: GET_RANDOM_JOKE,
  };
};
