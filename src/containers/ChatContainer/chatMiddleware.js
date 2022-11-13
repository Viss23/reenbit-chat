import { io } from "socket.io-client";
import { chatActions } from "./chatSlice";
import {
  REQUEST_ALL_CHATS,
  REQUEST_ALL_USERS,
  SEND_ALL_CHATS,
  SEND_ALL_USERS,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  TYPING,
  STATUS_CHANGE,
} from "./chatEvent";

const chatMiddleware = (store) => {
  let socket;

  return (next) => (action) => {
    const isConnectionEstablished = socket && store.getState().chats.isConnected;
    const currentUserId = store.getState().currentUser.id;

    if (chatActions.startConnecting.match(action)) {
      socket = io("http://localhost:5000");

      socket.on("connect", () => {
        store.dispatch(chatActions.connectionEstablished());

        socket.emit(REQUEST_ALL_CHATS, { userId: currentUserId });
        socket.emit(REQUEST_ALL_USERS, { userId: currentUserId });
      });

      socket.on(SEND_ALL_USERS, (users) => {
        store.dispatch(chatActions.receiveAllUsers({ users }));
      });

      socket.on(SEND_ALL_CHATS, (chats) => {
        store.dispatch(chatActions.receiveAllChats({ chats }));
      });

      socket.on(RECEIVE_MESSAGE, (message) => {
        store.dispatch(chatActions.receiveMessage({ message }));
      });

      socket.on(STATUS_CHANGE, (user) => {
        store.dispatch(chatActions.statusChange({ user }));
      });
    }

    if (chatActions.sendMessage.match(action) && isConnectionEstablished) {
      socket.emit(SEND_MESSAGE, action.payload);
    }

    if (chatActions.typing.match(action) && isConnectionEstablished) {
      socket.emit(TYPING, action.payload);
    }

    next(action);
  };
};

export default chatMiddleware;
