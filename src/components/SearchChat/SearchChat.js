import React from "react";

import "./styles.css";

const SearchChat = (props) => {
  const { handleSearch, searchChatValue } = props;
  return (
    <div class="search-chat">
      <div class="search-chat__my-photo"></div>
      <div class="search-chat__panel">
        <input
          type="text"
          placeholder="Search or start new chat"
          class="search-chat__input"
          value={searchChatValue}
          onChange={(event) => handleSearch(event)}
        ></input>
      </div>
    </div>
  );
};

export default SearchChat;
