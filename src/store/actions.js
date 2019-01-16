export default store => ({
  setChatData(state, data) {
    store.setState({
      chat: data,
      isChatLoaded: true
    });
  },
  resetChatData(state) {
    store.setState({
      chat: {
        messages: [],
        authors: [],
        isGroup: false
      }
    });
  }
});
