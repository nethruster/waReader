import anchorme from "anchorme";
import moment from 'moment';
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

/**
 * Parses the content of a Whatsapp txt chat export file and returns 
 * the data in an object
 * @param string text
 * @return object
 */
const parseTextFile = function (text) {
  text = replaceEmojiWithImg(addAnchorLinksToUrls(text));
  var linesArray = text.split('\n'),
      messages   = [],
      userList   = [];
  if(linesArray.length === 0) throw "The text has no lines";
      
  linesArray.forEach((line) => {
    if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )([^:]*)(:)(\s)(.*))/g.test(line)) {
      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )([^:]*)(:)(\s)(.*))/g.exec(line);
      let datetimeFormatString = lineData[13] == "" ? "M/D/YY H:m" : "M/D/YY h:m A";
      let obj = {
        datetime: moment(`${lineData[2]} ${lineData[9]}`, datetimeFormatString),
        msg: lineData[19],
        user: lineData[16]
      };

      messages.push(obj);

      if (!userList.includes(obj.user)) {
        userList.push(obj.user);
      }

    } else {
      messages[messages.length - 1].msg += `\n${line}`;
    }
  });
  if(messages.length === 0) throw "The text has no menssages";
  return {
    users: userList,
    messages: messages
  };
}

export default {
  parseTextFile,
  replaceEmojiWithImg,
  addAnchorLinksToUrls
}
