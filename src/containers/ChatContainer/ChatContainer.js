import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";

import { Chats, Chat, SearchChat } from "../../components";
import * as actions from "./actions";
import "./styles.css";

const ChatContainer = (props) => {
  const { chats, changeChat, isChatting, selectedChatId, sendMessage } = props;
  const [searchChatValue, setSearchChatValue] = useState("");

  const chooseChat = (userId) => {
    changeChat(userId);
  };

  const handleSearch = (event) => {
    setSearchChatValue(event.target.value);
  };

  let searchedMessages;

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
  } else {
    searchedMessages = null;
  }

  console.log(searchedMessages);

  const currentChat =
    chats.filter((chat) => {
      return chat.userId === selectedChatId;
    })[0] ?? null;

  return (
    <div class="main">
      <div class="left-side">
        <SearchChat
          handleSearch={handleSearch}
          searchChatValue={searchChatValue}
        />
        <Chats
          chats={chats}
          chooseChat={chooseChat}
          searchedMessages={searchedMessages}
        />
      </div>
      <div class="right-side">
        <Chat
          isChatting={isChatting}
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
    isChatting: state.chat.isChatting,
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
