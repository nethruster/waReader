export default store => ({
  setParsedChat(state, messagesArray) {
    store.setState({ chat: messagesArray });
  }
});
