import { combineReducers } from "redux";

import chatsReducer from "../containers/ChatContainer/chatSlice";
import loginReducer from "../containers/LoginContainer/loginSlice";

export default combineReducers({
  chats: chatsReducer,
  currentUser: loginReducer,
});
