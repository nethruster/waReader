import anchorme from 'anchorme';
import html from 'preact-html';

import {
  REGEX_MARKDOWN_BOLD,
  REGEX_MARKDOWN_ITALIC,
  REGEX_MARKDOWN_STRIKETHROUGH,
  REGEX_MARKDOWN_MONOSPACE
} from './vars';

function _htmlifyMarkdown(string) {
  return string
    .replace(REGEX_MARKDOWN_STRIKETHROUGH, '$1<s>$2</s>')
    .replace(REGEX_MARKDOWN_BOLD, '$1<b>$2</b>')
    .replace(REGEX_MARKDOWN_ITALIC, '$1<i>$2</i>')
    .replace(REGEX_MARKDOWN_MONOSPACE, '$1<tt>$2</tt>');
}

function _htmlfyUrls(string) {
  return anchorme(string, {
    attributes: [
      {
        name: 'target',
        value: '_blank'
      }
    ]
  });
}

function _stringifyMediaOmmited(string) {
  return string.replace(/<Media omitted>/gm, 'Media ommited');
}

export default function htmlifyMessage(messageString) {
  messageString = _htmlfyUrls(messageString);
  messageString = _htmlifyMarkdown(messageString);
  messageString = _stringifyMediaOmmited(messageString);

  return html(messageString);
}
