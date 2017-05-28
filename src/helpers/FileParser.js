import anchorme from "anchorme";
import twemoji from "twemoji";

function addAnchorLinksToUrls(text) {
  return anchorme(text);
}
function getEmojiUrl(iconId, options) {
  return `https://twemoji.maxcdn.com/svg/${iconId}.svg`;
}
function replaceEmojiWithImg(text) {
  return twemoji.parse(text,getEmojiUrl);
}
function parseTextFile(text) {
  var linesArray = text.split('\n'),
      messages = [],
      userList = [];
  linesArray.forEach((line) => {
    if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )([^:]*)(:)(\s)(.*))/g.test(line)) {
      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )([^:]*)(:)(\s)(.*))/g.exec(line);
      let obj = {
        date: lineData[2],
        msg: lineData[17],
        user: lineData[14]
      };
      messages.push(obj);

      if (!userList.includes(obj.user))
        userList.push(obj.user);
    } else {
      messages[messages.length - 1].msg += `\n${line}`;
    }
  });
  return {
    users: userList,
    mesagges: messages
  };
}
