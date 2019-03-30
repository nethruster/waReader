import whatsappParser from 'wareader-chat-parser';
import { USER_COLORS } from './vars';

export function getParsedChatObject(fileContents) {
  return whatsappParser
    .parseString(fileContents)
    .then(result => {
      // Assign user colours
      for (let author in result.authorList) {
        const userColorNumber = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
        const userColor = USER_COLORS[userColorNumber];

        result.authorList[author].color = userColor;
      }

      return result;
    })
    .catch(err => {
      console.error(err);
    });
}
