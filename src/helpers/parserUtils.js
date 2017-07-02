import anchorme from "anchorme";

/**
 * Replaces markdown bold formatted messages (*m*) with their html representation
 * @param string text
 * @return string
 */
const parseBoldSymbols = (text) => {
  return text.replace(/((^|\ |~|_)\*)([^\ \*\n\t]([^\n]*?[^\t\n\ ])?)(\*)/gm, "$2<b>$3</b>");
}

/**
 * Replaces markdown itallic formatted messages (_m_) with their html representation
 * @param string text
 * @return string
 */
const parseItallicSymbols = (text) => {
  return text.replace(/((^|\ |~|\*)_)([^\ _\n\t]([^\n]*?[^\t\n\ ])?)_/gm, "$2<i>$3</i>");
}

/**
 * Replaces markdown strikethrough formatted messages (~m~) with an html representation
 * @param string text
 * @return string
 */
const parseStrikethroughSymbols = (text) => {
  return text.replace(/((^|\ |\*|_)~)([^\ ~\n\t]([^\n]*?[^\t\n\ ])?)~/gm, "$2<span class='t-strikethrough'>$3</span>");
}

/**
 * Replaces urls with link tags within the passed text
 * @param string text
 * @return string
 */
const parseUrlLinks = (text) => {
  return anchorme(text, {
    attributes: [{
      name: "target",
      value: "_blank"
    }]
  });
}

/**
 * Replaces markdown formatted messages (*m*, _m_, ~m~) with an html representation
 * @param string text
 * @return string
 */
const parseMarkdown = (text) => {
  text = parseBoldSymbols(text);
  text = parseItallicSymbols(text);
  text = parseStrikethroughSymbols(text);

  return text;
}

/**
 * Computes the date format depending on the chat date format
 * returns the correspondent format
 * @param string firstn - first number of the date 
 * @param string postm - AM/PM
 * @return string
 */
const getDateFormat = (firstn, postm) => {
  if (firstn > 12) {
    if (postm == "") {
      return "DD/MM/YYYY HH:mm";
    } else {
      return "DD/MM/YYYY hh:mm A";
    }
  } else if (postm == "") {
    return "MM/DD/YYYY HH:mm";
  } else {
    return "MM/DD/YYYY hh:mm A";
  }
}



export default {
  getDateFormat,
  parseMarkdown,
  parseUrlLinks
}
