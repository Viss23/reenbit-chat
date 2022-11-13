/* import { CHANGE_CHAT, SEND_MESSAGE_SUCCESS, GET_RANDOM_ANSWER_SUCCESS } from "./actionTypes";

import { v4 } from "uuid";

const initialState = {
  chats: [
    {
      userId: "a5c49ba2-494b-4fc9-95fb-71caaeb37341",
      userImg:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      username: "Alice Freeman",
      messageHistory: [
        {
          messageId: "a5c49ba2-494b-4fc9-95fb-71caaeb37342",
          text: "yoy are the worst",
          isAuthor: false,
          date: "2020-10-01T21:21:27.413Z",
        },
        {
          messageId: "a5c49ba2-494b-4fc9-95fb-71caaeb37343",
          text: "yes i know",
          isAuthor: true,
          date: "2020-10-01T21:21:28.413Z",
        },
      ],
    },
    {
      userId: "a5c49ba2-494b-4fc9-95fb-71caaeb37140",
      userImg:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      username: "Josefina",
      messageHistory: [
        {
          messageId: "a5c49ba2-494b-4fc9-95fb-71caaeb37141",
          text: "We are losing money! Quick!",
          isAuthor: false,
          date: "2020-10-01T20:21:27.413Z",
        },
      ],
    },
    {
      userId: "a5c49ba2-494b-4fc9-95fb-71caaeb37141",
      userImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
      username: "Donald Trump",
      messageHistory: [
        {
          messageId: "a5c49ba2-494b-4fc9-95fb-71caaeb37141",
          text: "Just vote!",
          isAuthor: false,
          date: "2020-10-01T20:21:27.413Z",
        },
      ],
    },
    {
      userId: "5",
      userImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
      username: "123",
      messageHistory: [],
    },
  ],
  isChatting: false,
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CHAT: {
      return {
        ...state,
        isChatting: true,
        selectedChatId: payload.userId,
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      const { userId, message } = payload;
      const newMessage = {
        messageId: v4(),
        text: message,
        isAuthor: true,
        date: new Date().toISOString(),
      };
      const newChats = state.chats.map((chat) => {
        if (chat.userId !== userId) {
          return chat;
        }
        return {
          ...chat,
          messageHistory: [...chat.messageHistory, newMessage],
        };
      });
      return {
        ...state,
        chats: newChats,
      };
    }
    case GET_RANDOM_ANSWER_SUCCESS: {
      const { userId, message } = payload;
      const newMessage = {
        messageId: v4(),
        text: message,
        isAuthor: false,
        date: new Date().toISOString(),
      };
      const newChats = state.chats.map((chat) => {
        if (chat.userId !== userId) {
          return chat;
        }
        return {
          ...chat,
          messageHistory: [...chat.messageHistory, newMessage],
        };
      });
      return {
        ...state,
        chats: newChats,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
 */
