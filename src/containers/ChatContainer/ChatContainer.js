import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "./chatSlice";

import { Chats, Chat, SearchChat } from "../../components";
import { logout } from "../LoginContainer/loginSlice";

import "./styles.css";

const ChatContainer = (props) => {
  const chats = useSelector((state) => state.chats.chats);
  const users = useSelector((state) => state.chats.users);
  const currentUserId = useSelector((state) => state.currentUser.id);
  const isEstablishingConnection = useSelector((state) => state.chats.isEstablishingConnection);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isEstablishingConnection) {
      dispatch(chatActions.startConnecting());
    }
  }, [isEstablishingConnection]);

  const [searchChatValue, setSearchChatValue] = useState("");
  const [selectedChatId, setSelectedChatId] = useState("");

  const chooseChat = useCallback((userId) => {
    setSelectedChatId(userId);
  }, []);

  const handleSearch = useCallback((event) => {
    setSearchChatValue(event.target.value);
  }, []);

  let searchedMessages;
  let searchedUsers;

  if (searchChatValue) {
    searchedMessages = chats.map((chat) => {
      const filteredMessageHistory = chat.messages.filter((message) => {
        return message.text.includes(searchChatValue);
      });
      return {
        ...chat,
        messages: filteredMessageHistory,
      };
    });
    searchedUsers = chats.filter((chat) => chat.name.includes(searchChatValue));
  } else {
    searchedMessages = null;
    searchedUsers = null;
  }

  const currentChat = chats.filter((chat) => {
    return chat.id === selectedChatId;
  })[0];

  if (chats.length === 0) {
    return <></>;
  }

  return (
    <div className="main">
      <div className="left-side">
        <SearchChat handleSearch={handleSearch} searchChatValue={searchChatValue} />
        <Chats
          chats={chats}
          chooseChat={chooseChat}
          searchedMessages={searchedMessages}
          searchedUsers={searchedUsers}
          currentUserId={currentUserId}
          users={users}
        />
      </div>
      <div className="right-side">
        <button className="logout" onClick={() => dispatch(logout())}>
          Logout
        </button>
        <Chat
          selectedChatId={selectedChatId}
          messageHistory={currentChat?.messages}
          chat={currentChat || null}
          sendMessage={(chatId, message) =>
            dispatch(chatActions.sendMessage({ chatId, message, userId: currentUserId }))
          }
          currentUserId={currentUserId}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
