import whatsappParser from 'whatsapp-chat-parser-alt';

export function getParsedChatObject(fileContents) {
  return whatsappParser
    .parseString(fileContents)
    .then(result => {
      return result;
    })
    .catch(err => {
      console.error(err);
    });
}
