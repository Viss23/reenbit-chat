import React, { useEffect, useRef } from "react";
import moment from "moment";

import { SendMessage } from "../index";
import "./styles.css";
import { sendMessage } from "../../containers/ChatContainer/actions";

const Chat = (props) => {
  const {
    isChatting,
    chat,
    sendMessage,
    selectedChatId,
    messageHistory,
  } = props;
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  const scrollToBottomFast = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "start",
    });
  };
  useEffect(() => {
    scrollToBottomFast();
  }, [selectedChatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messageHistory]);

  if (chat === null) {
    return (
      <div class="chat">
        <div class="chat__empty" ref={messagesEndRef}>
          <p class="chat__empty-text">
            Please select a chat to start messaging
          </p>
        </div>
      </div>
    );
  }
  const lastIndex = chat.messageHistory.length - 1;

  const chatHistory = chat.messageHistory.map((message, index) => {
    if (message.isAuthor) {
      return (
        <div class="chat-history__message_self">
          <div class="chat-history__message-photo_self"></div>
          <div class="chat-history__message-wrapper">
            <div class="chat-history__message-text_self">
              <span>{message.text}</span>
            </div>
            <div class="chat-history__date">
              <span class="chat-history__date_self">
                {moment(message.date).format("M/DD/YY LT")}
              </span>
            </div>
          </div>
          {lastIndex === index && <div ref={messagesEndRef} class="ref" />}
        </div>
      );
    } else {
      return (
        <div class="chat-history__message">
          <div
            class="chat-history__message-photo"
            style={{ backgroundImage: `url(${chat.userImg})` }}
          ></div>
          <div class="chat-history__message-wrapper">
            <div class="chat-history__message-text">
              <span>{message.text}</span>
            </div>
            <div class="chat-history__date">
              <span>{moment(message.date).format("M/DD/YY LT")}</span>
            </div>
          </div>
          {lastIndex === index && <div ref={messagesEndRef} class="ref" />}
        </div>
      );
    }
  });

  return (
    <div class="chat">
      <div class="chat-header">
        <div
          class="chat-header__photo"
          style={{ backgroundImage: `url(${chat.userImg})` }}
        ></div>
        <div class="chat-header__name">
          <span>{chat.username}</span>
        </div>
      </div>
      <div class="chat-history">{chatHistory}</div>
      <SendMessage sendMessage={sendMessage} userId={chat.userId} />
    </div>
  );
};

export default Chat;
