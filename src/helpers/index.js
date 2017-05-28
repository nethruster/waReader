import anchorme from "anchorme";
import twemoji from "twemoji";

/**
 * Replaces urls with link tags within the passed text
 * @param string text
 * @return string
 */
const addAnchorLinksToUrls = function (text) {
  return anchorme(text);
}

/**
 * Gets the source of the image for the passed emoji id
 * Callback function
 */
function getEmojiUrl(iconId, options) {
  return `https://twemoji.maxcdn.com/svg/${iconId}.svg`;
}

/**
 * Replaces emoji characters with their image equivalent
 * @param string text 
 * @return string
 */
const replaceEmojiWithImg = function (text) {
  return twemoji.parse(text, getEmojiUrl);
}

const parseChatLine = function(line) {
  return addAnchorLinksToUrls(replaceEmojiWithImg(line));
}

/**
 * Parses the content of a Whatsapp txt chat export file and returns 
 * the data in an object
 * @param string text
 * @return object
 */
const parseTextFile = function (text) {
  var linesArray = text.split('\n'),
      messages   = [],
      userList   = [];
      
  linesArray.forEach((line) => {
    if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )([^:]*)(:)(\s)(.*))/g.test(line)) {
      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )([^:]*)(:)(\s)(.*))/g.exec(line);

      let obj = {
        date: lineData[2],
        msg: lineData[17],
        user: lineData[14]
      };

      messages.push(obj);

      if (!userList.includes(obj.user)) {
        userList.push(obj.user);
      }

    } else {
      messages[messages.length - 1].msg += `\n${line}`;
    }
  });

  return {
    users: userList,
    messages: messages
  };
}

export default {
  parseTextFile,
  parseChatLine,
  replaceEmojiWithImg,
  addAnchorLinksToUrls
}
