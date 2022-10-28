import dataemoji from '../dataemoji.json';
const filterEmoji = (e, limit) => {
  return dataemoji
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(e.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(e)) {
        return true;
      }
      return false;
    })
    .slice(0, limit);
};

export default filterEmoji;
