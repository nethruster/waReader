import parserUtils from './parserUtils';
import moment from 'moment';

/**
 * Parses the content of a Whatsapp txt chat export file and returns 
 * the data in an object
 * @param string text
 * @return object
 */
const parseTextFile = (text, intitalDateTime, finalDateTime) => {
  var hasInitialDatime = false,
    hasFinalDateTime = false,
    hasReachedFinalDateTime = false;

  if (intitalDateTime) {
    hasInitialDatime = true;
    intitalDateTime = moment(intitalDateTime);
  }

  if (finalDateTime) {
    hasFinalDateTime = true;
    finalDateTime = moment(finalDateTime);
  }
  
  // Empty file
  if (!text) throw "The text has no lines";

  // Replace markdown syntax by its correct representation
  text = parserUtils.parseMarkdown(text);

  // Surround urls with anchor tags
  text = parserUtils.parseUrlLinks(text);

  var linesArray = text.split('\n'),
    messages = [],
    userList = [],
    userNames = [];

  linesArray.forEach((line) => {
    if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )([^:]*)(:)(\s)(.*))/g.test(line)) { // Normal user message

      if (hasReachedFinalDateTime) return {};

      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )([^:]*)(:)(\s)(.*))/g.exec(line);
      let datetimeFormatString = parserUtils.getDateFormat(lineData[3], lineData[13]);
      
      let msgObj = {
        datetime: moment(`${lineData[2]} ${lineData[9]}`, datetimeFormatString),
        msg: lineData[19],
        user: {
          name: lineData[16],
          letter: parserUtils.getUserLetter(lineData[16])
        }
      };

      if (!hasInitialDatime || msgObj.datetime.isAfter(intitalDateTime)) {
        if (!hasFinalDateTime || msgObj.datetime.isBefore(finalDateTime)) {
          messages.push(msgObj);
          
          if (!userNames.includes(msgObj.user.name)) {
            userNames.push(msgObj.user.name);
            userList.push(msgObj.user);
          }
        } else {
          hasReachedFinalDateTime = true;
        }
      }
    } else if (/^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )(.*))/g.test(line)) { // System | misc message

      if (hasReachedFinalDateTime) return {};

      let lineData = /^(((\d+)(\/)(\d+)(\/)(\d+))(, )((\d+)(:)(\d+)( (AM|PM))?)( - )(.*))/g.exec(line);
      let datetimeFormatString = parserUtils.getDateFormat(lineData[3], lineData[13]);
      let msgObj = {
        datetime: moment(`${lineData[2]} ${lineData[9]}`, datetimeFormatString),
        msg: lineData[16],
        user: {}
      };

      if (!hasInitialDatime || msgObj.datetime.isAfter(intitalDateTime)) {
        if (!hasFinalDateTime || msgObj.datetime.isBefore(finalDateTime)) {
          messages.push(msgObj);
        } else {
          hasReachedFinalDateTime = true;
        }
      }
    } else {
      if (messages[0]) {
        messages[messages.length > 0 ? messages.length - 1 : 0].msg += `\n${line}`;
      }
    }
  });

  if (messages.length === 0) throw "The text has no messages";

  userList.sort((uA, uB) => {
    if (uA.name < uB.name) {
        return -1;
    }
    else if (uA.name > uB.name) {
        return 1;
    }
    return 0;
  });

  return {
    users: userList,
    messages: messages
  };
}

export default {
  parseTextFile
}
