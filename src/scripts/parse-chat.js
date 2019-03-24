import whatsappParser from 'wareader-chat-parser';

export function getParsedChatObject(fileContents) {
  return whatsappParser
    .parseString(fileContents)
    .then(result => result)
    .catch(err => {
      console.error(err);
    });
}
