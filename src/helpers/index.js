import anchorme from "anchorme";
import moment from 'moment';
import twemoji from "twemoji";

/**
 * Replaces urls with link tags within the passed text
 * @param string text
 * @return string
 */
const addAnchorLinksToUrls = function (text) {
  return anchorme(text, {
    attributes: [{
        name: "target",
        value: "_blank"
      }]
    });
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
 * Computes the date format depending on the chat date format
 * returns the correspondent format
 * @param string firstn - first number of the date 
 * @param string postm - AM/PM
 * @return string
 */
function getDateFormat(firstn, postm) {
  if(firstn > 12) {
    if(postm == "") {
      return "DD/MM/YYYY HH:mm";
    } else {
      return "DD/MM/YYYY hh:mm A";
    }
  } else {
    if(postm == "") {
      return "MM/DD/YYYY HH:mm";
    } else {
      return "MM/DD/YYYY hh:mm A";
    }
  }
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
    if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )([^:]*)(:)(\s)(.*))/g.test(line)) {
      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )([^:]*)(:)(\s)(.*))/g.exec(line);
      let datetimeFormatString = getDateFormat(lineData[3], lineData[13]);
      let msgObj = {
        datetime: moment(`${lineData[2]} ${lineData[9]}`, datetimeFormatString).format("DD/MM/YYYY HH:mm"),
        msg: lineData[19],
        user: lineData[16]
      };

      messages.push(msgObj);

      if (!userList.includes(msgObj.user)) {
        userList.push(msgObj.user);
      }

    } else {
      if(/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )(.*))/g.test(line)) {
        let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )(.*))/g.exec(line);
        let datetimeFormatString = getDateFormat(lineData[3], lineData[13]);
        let msgObj = {
          date: moment(`${lineData[2]} ${lineData[9]}`, datetimeFormatString).format("DD/MM/YYYY HH:mm"),
          msg: lineData[16],
          user: ''
        };

        messages.push(msgObj);

      } else {
        messages[messages.length > 0 ? messages.length - 1 : 0].msg += `\n${line}`;
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
  parseTextFile
}
