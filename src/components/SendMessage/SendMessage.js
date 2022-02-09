import React, { useState } from "react";

import "./styles.css";

const SendMessage = (props) => {
  const { sendMessage, userId } = props;
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage(userId, message);
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
          onKeyDown={handleKeyDown}
        ></textarea>
      </div>
    </div>
  );
};

export default SendMessage;
