import React from "react";

import "./styles.css";

const SearchChat = (props) => {
  const { handleSearch, searchChatValue } = props;
  return (
    <div className="search-chat">
      <div className="search-chat__my-photo"></div>
      <div className="search-chat__panel">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="search-chat__input"
          value={searchChatValue}
          onChange={(event) => handleSearch(event)}
        ></input>
      </div>
    </div>
  );
};

export default React.memo(SearchChat);
