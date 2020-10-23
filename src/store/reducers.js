import { combineReducers } from "redux";

import chatReducer from "../containers/ChatContainer/reducer";

export default combineReducers({
  chat: chatReducer,
});
