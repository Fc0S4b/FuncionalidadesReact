import EmojiRow from './EmojiRow';

const Results = ({ emojis }) => {
  return (
    <div>
      {emojis.map((emoji) => (
        <EmojiRow key={emoji.title} symbol={emoji.symbol} title={emoji.title} />
      ))}
    </div>
  );
};
export default Results;
