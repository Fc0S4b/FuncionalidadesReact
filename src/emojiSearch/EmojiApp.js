import React, { useState } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import './index.css';
import filterEmoji from './utils/filterEmoji';
import Results from './Results';

const EmojiApp = () => {
  const [filter, setFilter] = useState(filterEmoji('', 10));

  const handleSearchChange = (e) => {
    setFilter(filterEmoji(e.target.value, 20));
  };
  return (
    <div className="container">
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <Results emojis={filter} />
    </div>
  );
};

export default EmojiApp;
