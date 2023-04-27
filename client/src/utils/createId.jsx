function generateRandomKeyword() {
  let keyword = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let keywordLength = 8;

  for (let i = 0; i < keywordLength; i++) {
    keyword += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return keyword;
}

export let createId = (property) => {
  let id = '';
  let randomKeyword = generateRandomKeyword();

  for (let i = 0; i < property.length; i++) {
    id += property.charAt(i);
  }

  id += randomKeyword;

  return id;
};