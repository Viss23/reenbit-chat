import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Chats, Chat, SearchChat, SendMessage } from "../../components";
import * as actions from "./actions";

const ChatContainer = (props) => {
  const { getRandomJoke, joke } = props;

  return (
    <div>
      <p>chat containerrrr</p>
      <button onClick={getRandomJoke}> get joke</button>
      <p>{joke}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.chat.id,
    joke: state.chat.joke,
  };
};

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
