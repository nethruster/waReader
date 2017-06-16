function generateMessagesHtmlString(msgs, selfUser) {
  var stringDataArray = new Array(msgs.length);
  var lastUser;
  msgs.forEach(function(e, index) {
    let bodydata;
    if(e.user !== '') {
      bodydata = `<div class="wr-chat-bubble" class="${ msgs[index < msgs.length - 1 ? index + 1 : 0].user !== e.user ? 'lastByUser' : ''}">
            ${lastUser !== e.user ? `<span class="wr-chat-message-author">${e.user}</span>` : ''}
            <div class="wr-chat-message-text">${e.msg}</div>
            <p class="wr-chat-message-datetime">${ e.datetime }</p>
        </div>`
    } else {
      bodydata = `<div class="wr-chat-sys-message">
            <p>${e.msg}</p>
        </div>`;
    }
    stringDataArray[index] = `<div class="wr-chat-message flex flex-cross-center ${selfUser === e.user ? 'wr-chat-self' : ''}">${bodydata}</div>`
   lastUser = e.user;
  });

  return stringDataArray.join('');
}

const generatePrintViewString = function(msgs, selfUser) {
  // TODO generate full styled template
  return '';
}

export default {
  generatePrintViewString
}
