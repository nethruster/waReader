export default function actions (store) {
  return {
    setParsedChat(state, messagesArray) {
      this.setState({chat: messagesArray})
    }
  }
}
