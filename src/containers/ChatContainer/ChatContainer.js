import React, { useState, useCallback } from "react";
import { connect } from "react-redux";

import { Chats, Chat, SearchChat } from "../../components";
import * as actions from "./actions";
import "./styles.css";

const ChatContainer = (props) => {
  const { chats, sendMessage } = props;
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
      const filteredMessageHistory = chat.messageHistory.filter((message) => {
        return message.text.includes(searchChatValue);
      });
      return {
        ...chat,
        messageHistory: filteredMessageHistory,
      };
    });
    searchedUsers = chats.filter((chat) =>
      chat.username.includes(searchChatValue)
    );
  } else {
    searchedMessages = null;
    searchedUsers = null;
  }

  const currentChat = chats.filter((chat) => {
    return chat.userId === selectedChatId;
  })[0];

  return (
    <div className="main">
      <div className="left-side">
        <SearchChat
          handleSearch={handleSearch}
          searchChatValue={searchChatValue}
        />
        <Chats
          chats={chats}
          chooseChat={chooseChat}
          searchedMessages={searchedMessages}
          searchedUsers={searchedUsers}
        />
      </div>
      <div className="right-side">
        <Chat
          selectedChatId={selectedChatId}
          messageHistory={currentChat?.messageHistory}
          chat={currentChat || null}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chats: state.chat.chats,
    selectedChatId: state.chat.selectedChatId,
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
