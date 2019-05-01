import initialStore from './initial-store';

export default store => ({
  setChatData(state, data) {
    store.setState({
      chat: data,
      isChatLoaded: true
    });
  },
  resetChatData(state) {
    store.setState({
      isChatLoaded: false
    });
  },
  setActiveTab(sate, tab = 'chat') {
    store.setState({
      activeTab: tab.toLowerCase()
    });
  },
  setActiveHomeTab(sate, tab = 'android') {
    store.setState({
      activeHomeTab: tab.toLowerCase()
    });
  },
  setActiveUser(sate, user = '') {
    store.setState({
      activeUser: user.toLowerCase()
    });
  }
});
