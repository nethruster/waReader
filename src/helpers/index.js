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

/**
 * Parses the content of a Whatsapp txt chat export file and returns 
 * the data in an object
 * @param string text
 * @return object
 */
const parseTextFile = function (text) {

  /* Replace html emoji entities by their image equivalent 
   * And then surround urls with anchor tags
   */
  text = replaceEmojiWithImg(addAnchorLinksToUrls(text));

  var linesArray = text.split('\n'),
      messages   = [],
      userList   = [];

  if(linesArray.length === 0) throw "The text has no lines";
      
  linesArray.forEach((line) => {
    if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )([^:]*)(:)(\s)(.*))/g.test(line)) {
      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )([^:]*)(:)(\s)(.*))/g.exec(line);

      let msgObj = {
        date: lineData[2],
        msg: lineData[17],
        user: lineData[14]
      };

      messages.push(msgObj);

      if (!userList.includes(msgObj.user)) {
        userList.push(msgObj.user);
      }

    } else {
      if(/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )(.*))/g.test(line)) {
        let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+))( - )(.*))/g.exec(line);
        let msgObj = {
          date: lineData[2],
          msg: lineData[14],
          user: ''
        };

        messages.push(msgObj);

      } else {
        messages[messages.length - 1].msg += `\n${line}`;
      }
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