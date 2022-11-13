import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../containers/ChatContainer/chatSlice";

import "./styles.css";

const SendMessage = (props) => {
  const { sendMessage, chatId } = props;
  const currentUserId = useSelector((state) => state.currentUser.id);
  const dispatch = useDispatch();
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setMessage(event.target.value);
    dispatch(chatActions.typing({ userId: currentUserId, chatId }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage(chatId, message);
      setMessage("");
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="send-message__panel">
        <textarea
          className="send-message__input"
          placeholder="Type your message"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}></textarea>
      </div>
    </div>
  );
};

export default SendMessage;
