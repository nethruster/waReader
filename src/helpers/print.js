function generateMessagesHtmlString(msgs, selfUser) {
  var stringDataArray = new Array(msgs.length);
  var lastUser;
  msgs.forEach((msg, index) => {
    let bodydata;

    if (msg.user !== '') {
      bodydata = `
        <div class="wr-chat-bubble" class="${msg.user.name !== msgs[index < msgs.length - 1 ? index + 1 : 0].user.name ? 'lastByUser' : ''}">
            ${lastUser !== msg.user.name ? `<span class="wr-chat-message-author">${msg.user.name}</span>` : ''}
            <div class="wr-chat-message-text">${msg.msg}</div>
            <p class="wr-chat-message-datetime">${msg.datetime.format('DD/MM/YYYY HH:mm')}</p>
        </div>`;
    } else {
      bodydata = `
      <div class="wr-chat-sys-message">
          <p>${msg.msg}</p>
      </div>`;
    }
    stringDataArray[index] = `<div class="wr-chat-message flex flex-cross-center ${selfUser === msg.user.name ? 'wr-chat-self' : ''}">${bodydata}</div>`;

    lastUser = msg.user.name;
  });

  return stringDataArray.join('');
}

const generatePrintViewString = function (msgs, selfUser, chatTitle) {
  const previewTemplate = `
    <title>Chat with ${chatTitle} - Print View</title>
    <link rel="stylesheet" href="print.css">
    <div class="wr-chat-view flex">
        <div class="wr-chat-messages">
            <div class="wr-chat-messages-list">
                ${generateMessagesHtmlString(msgs, selfUser)}
            </div>
        </div>
    </div>
    <p class="ta-c"><small>Generated with <a href="https://wareader.nethruster.com">waReader</a> by Nethruster (nethruster.com)</small></p>`;

  return previewTemplate;
};

export default {
  generatePrintViewString,
};
