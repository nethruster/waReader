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
      },
      isChatLoaded: false
    });
  },
  setActiveTab(sate, tab = 'chat') {
    store.setState({
      activeTab: tab.toLowerCase()
    });
  },
  setActiveUser(sate, user = '') {
    store.setState({
      activeUser: user.toLowerCase()
    });
  }
});
