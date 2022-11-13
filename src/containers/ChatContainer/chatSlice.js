import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* chats: [
  {
    id: null,
    users: [{ id: null, userName: null }],
    messages: [
      {
        id: null,
        text: null,
        authorId: null,
        sendDate: null,
      },
    ],
  },
], */

const initialState = {
  users: [{ id: null, userName: null }],
  chats: [],
  isEstablishingConnection: false,
  isConnected: false,
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    startConnecting(state) {
      state.isEstablishingConnection = true;
    },
    connectionEstablished(state) {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    },
    receiveAllChats(state, action) {
      state.chats = action.payload.chats;
    },
    receiveAllUsers(state, action) {
      state.users = action.payload.users;
    },
    receiveMessage(state, action) {
      const index = state.chats.findIndex(() => action.payload.message.id);
      state.chats[index].messages.push(action.payload.message);
    },
    sendMessage(state, action) {},
    typing(state, action) {},
    statusChange(state, action) {
      const index = state.users.findIndex((user) => action.payload.user.userId === user.id);
      state.users[index].isOnline = action.payload.user.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const chatActions = chatsSlice.actions;

export default chatsSlice.reducer;
