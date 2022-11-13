import React from "react";
import moment from "moment";

import "./styles.css";

const Chats = (props) => {
  const { chats, chooseChat, searchedMessages, searchedUsers, currentUserId, users } = props;

  const sortedChatsByTime = Array.from(chats).sort((a, b) => {
    a.message[a.message.length - 1].sentDate.localeCompare(
      b.message[b.message.length - 1].sentDate
    );
  });

  let searchedUsersList;

  if (searchedUsers) {
    searchedUsersList = searchedUsers.map((chat) => {
      const lastMessage = chat.messages.length - 1;
      return (
        <div className="chats__dialog" onClick={() => chooseChat(chat.id)} key={chat.id}>
          <div className="dialog__photo" style={{ backgroundImage: `url(${chat.userImg})` }}></div>
          <div className="dialog__name-message">
            <div className="dialog__name">{chat.name}</div>
            <div className="dialog__message">
              {`${chat.messages[lastMessage].author.id === currentUserId ? "You: " : ""}${
                chat.messages[lastMessage].text
              }`}
            </div>
          </div>
          <div className="dialog__date">
            <span>{moment(chat.messages[lastMessage].date).format("MMM D,YYYY")}</span>
          </div>
        </div>
      );
    });
  }

  const excludeUsers = chats.map((chat) => chat.users.map(({ id }) => id)).flat();
  const newContacts = users.filter(({ id }) => {
    return !excludeUsers.includes(id);
  });

  let newContactsList;

  if (newContacts) {
    newContactsList = newContacts.map((user) => {
      return (
        <div
          className="chats__dialog"
          /*  onClick={() => chooseChat(chat.userId)} */
          key={user.userId}>
          <div className="dialog__name-message">
            <div className="dialog__name">{user.username}</div>
          </div>
        </div>
      );
    });
  }

  let searchedMessagesList;

  if (searchedMessages) {
    searchedMessagesList = searchedMessages.map((chat) => {
      return chat.messages.map((message) => {
        return (
          <div
            className="chats__dialog"
            onClick={() => chooseChat(chat.userId)}
            key={message.messageId}>
            <div
              className="dialog__photo"
              style={{ backgroundImage: `url(${chat.userImg})` }}></div>
            <div className="dialog__name-message">
              <div className="dialog__name">{chat.username}</div>
              <div className="dialog__message">
                {`${message.author.id === currentUserId ? "You: " : ""}${message.text}`}
              </div>
            </div>
            <div className="dialog__date">
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
      const recipientId = chat.users.filter(({ id }) => id !== currentUserId)[0].id;
      const recipient = users.find((user) => user.id === recipientId);
      const lastMessage = chat.messages.length - 1;
      return (
        <div className="chats__dialog" onClick={() => chooseChat(chat.id)} key={chat.id}>
          <div
            className="dialog__photo"
            style={{ backgroundColor: recipient?.isOnline ? "green" : "red" }}></div>
          <div className="dialog__name-message">
            <div className="dialog__name">{recipient?.username} </div>
            <div className="dialog__message">
              {`${chat.messages[lastMessage].id === currentUserId ? "You: " : ""}${
                chat.messages[lastMessage].text
              }`}
            </div>
          </div>
          <div className="dialog__date">
            <span>{moment(chat.messages[lastMessage].date).format("MMM D,YYYY")}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="chats">
      <div className="chats__header">
        <span>Chats</span>
      </div>
      {chatsList}
      {!!searchedUsersList && <p>Contacts:</p>}
      {searchedUsersList}
      {!!searchedMessagesList && <p>Messages:</p>}
      {searchedMessagesList}
      <div className="chats__header">
        <span>New Contacts</span>
        {newContactsList}
      </div>
    </div>
  );
};

export default React.memo(Chats);
