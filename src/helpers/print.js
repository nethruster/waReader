function generateMessagesHtmlString(msgs, selfUser) {
  var stringDataArray = new Array(msgs.length);
  var lastUser;
  msgs.forEach(function (e, index) {
    let bodydata;

    if (e.user !== '') {
      bodydata = `
        <div class="wr-chat-bubble" class="${e.user !== msgs[index < msgs.length - 1 ? index + 1 : 0].user ? 'lastByUser' : ''}">
            ${lastUser !== e.user ? `<span class="wr-chat-message-author">${e.user}</span>` : ''}
            <div class="wr-chat-message-text">${e.msg}</div>
            <p class="wr-chat-message-datetime">${e.datetime.format("DD/MM/YYYY HH:mm")}</p>
        </div>`;
    } else {
      bodydata = `
      <div class="wr-chat-sys-message">
          <p>${e.msg}</p>
      </div>`;
    }
    stringDataArray[index] = `<div class="wr-chat-message flex flex-cross-center ${selfUser === e.user ? 'wr-chat-self' : ''}">${bodydata}</div>`;

    lastUser = e.user;
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
}

export default {
  generatePrintViewString
}
