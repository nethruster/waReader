export default store => ({
  setChatData(state, data) {
    store.setState({ chat: data });
  }
});
