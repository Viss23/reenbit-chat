import React, { useEffect, useRef } from "react";
import moment from "moment";

import { SendMessage } from "../index";
import "./styles.css";

const Chat = (props) => {
  const { chat, sendMessage, selectedChatId, messages, currentUserId } = props;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const scrollToBottomFast = () => {
      messagesEndRef.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "start",
      });
    };
    scrollToBottomFast();
  }, [selectedChatId, chat]);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    };
    scrollToBottom();
  }, [messages]);

  if (chat === null) {
    return (
      <div className="chat">
        <div className="chat__empty" ref={messagesEndRef}>
          <p className="chat__empty-text">Please select a chat to start messaging</p>
        </div>
      </div>
    );
  }
  const lastIndex = chat.messages.length - 1;

  const chatHistory = chat.messages.map((message, index) => {
    if (message.author.id === currentUserId) {
      return (
        <div className="chat-history__message_self" key={message.id}>
          <div className="chat-history__message-photo_self"></div>
          <div className="chat-history__message-wrapper">
            <div className="chat-history__message-text_self">
              <span>{message.text}</span>
            </div>
            <div className="chat-history__date">
              <span className="chat-history__date_self">
                {moment(message.sentDate).format("M/DD/YY LT")}
              </span>
            </div>
          </div>
          {lastIndex === index && <div ref={messagesEndRef} className="ref" />}
        </div>
      );
    } else {
      return (
        <div className="chat-history__message" key={message.id}>
          <div
            className="chat-history__message-photo"
            style={{ backgroundImage: `url(${chat.userImg})` }}></div>
          <div className="chat-history__message-wrapper">
            <div className="chat-history__message-text">
              <span>{message.text}</span>
            </div>
            <div className="chat-history__date">
              <span>{moment(message.sentDate).format("M/DD/YY LT")}</span>
            </div>
          </div>
          {lastIndex === index && <div ref={messagesEndRef} className="ref" />}
        </div>
      );
    }
  });

  return (
    <div className="chat">
      <div className="chat-header">
        <div
          className="chat-header__photo"
          style={{ backgroundImage: `url(${chat.userImg})` }}></div>
        <div className="chat-header__name">
          <span>{chat.username}</span>
        </div>
      </div>
      <div className="chat-history">{chatHistory}</div>
      <SendMessage sendMessage={sendMessage} chatId={chat.id} />
    </div>
  );
};

export default Chat;
