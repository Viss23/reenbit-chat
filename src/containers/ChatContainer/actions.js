import { CHANGE_CHAT, SEND_MESSAGE } from "./actionTypes";

export const changeChat = (userId) => {
  return {
    type: CHANGE_CHAT,
    payload: { userId },
  };
};

export const sendMessage = (userId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { userId, message },
  };
};
