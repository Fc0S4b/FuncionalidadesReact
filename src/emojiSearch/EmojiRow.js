import { useState, useEffect } from 'react';

const EmojiRow = ({ title, symbol }) => {
  const [alert, setAlert] = useState(false);

  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className="emoji-result"
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(symbol);
      }}
    >
      <img src={src} alt={title} />
      <span className="title">{title}</span>
      <span className="info">{alert ? 'Copiado!' : 'Copiar'}</span>
    </div>
  );
};
export default EmojiRow;
