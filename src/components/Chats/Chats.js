import React from "react";
import moment from "moment";

import "./styles.css";

const Chats = (props) => {
  const { chats, chooseChat, searchedMessages, searchedUsers } = props;

  const sortedChatsByTime = Array.from(chats).sort((a, b) =>
    b.messageHistory[b.messageHistory.length - 1].date.localeCompare(
      a.messageHistory[a.messageHistory.length - 1].date
    )
  );

  let searchedUsersList;

  if (searchedUsers) {
    searchedUsersList = searchedUsers.map((chat) => {
      const lastMessage = chat.messageHistory.length - 1;
      return (
        <div
          class="chats__dialog"
          onClick={() => chooseChat(chat.userId)}
          key={chat.userId}
        >
          <div
            class="dialog__photo"
            style={{ backgroundImage: `url(${chat.userImg})` }}
          ></div>
          <div class="dialog__name-message">
            <div class="dialog__name">{chat.username}</div>
            <div class="dialog__message">
              {`${chat.messageHistory[lastMessage].isAuthor ? "You: " : ""}${
                chat.messageHistory[lastMessage].text
              }`}
            </div>
          </div>
          <div class="dialog__date">
            <span>
              {moment(chat.messageHistory[lastMessage].date).format(
                "MMM D,YYYY"
              )}
            </span>
          </div>
        </div>
      );
    });
  }

  let searchedMessagesList;

  if (searchedMessages) {
    searchedMessagesList = searchedMessages.map((chat) => {
      return chat.messageHistory.map((message) => {
        return (
          <div
            class="chats__dialog"
            onClick={() => chooseChat(chat.userId)}
            key={chat.userId}
          >
            <div
              class="dialog__photo"
              style={{ backgroundImage: `url(${chat.userImg})` }}
            ></div>
            <div class="dialog__name-message">
              <div class="dialog__name">{chat.username}</div>
              <div class="dialog__message">
                {`${message.isAuthor ? "You: " : ""}${message.text}`}
              </div>
            </div>
            <div class="dialog__date">
              <span>{moment(message.date).format("MMM D,YYYY")}</span>
            </div>
          </div>
        );
      });
    });
  }

  let chatsList;

  if (!searchedMessages && !searchedUsers) {
    chatsList = sortedChatsByTime.map((chat) => {
      const lastMessage = chat.messageHistory.length - 1;
      return (
        <div
          class="chats__dialog"
          onClick={() => chooseChat(chat.userId)}
          key={chat.userId}
        >
          <div
            class="dialog__photo"
            style={{ backgroundImage: `url(${chat.userImg})` }}
          ></div>
          <div class="dialog__name-message">
            <div class="dialog__name">{chat.username}</div>
            <div class="dialog__message">
              {`${chat.messageHistory[lastMessage].isAuthor ? "You: " : ""}${
                chat.messageHistory[lastMessage].text
              }`}
            </div>
          </div>
          <div class="dialog__date">
            <span>
              {moment(chat.messageHistory[lastMessage].date).format(
                "MMM D,YYYY"
              )}
            </span>
          </div>
        </div>
      );
    });
  }

  return (
    <div class="chats">
      <div class="chats__header">
        <span>Chats</span>
      </div>
      {chatsList}
      {!!searchedUsersList && <p>Contacts:</p>}
      {searchedUsersList}
      {!!searchedMessagesList && <p>Messages:</p>}
      {searchedMessagesList}
    </div>
  );
};

export default Chats;
