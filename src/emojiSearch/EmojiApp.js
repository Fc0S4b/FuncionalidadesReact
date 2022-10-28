import React, { useState } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import './index.css';
import filterEmoji from './utils/filterEmoji';

const EmojiApp = () => {
  const [filter, setFilter] = useState(filterEmoji('', 20));

  const handleSearchChange = (e) => {
    setFilter(filterEmoji(e.target.value, 20));
  };
  return (
    <div className="container">
      <Header />
      <SearchInput />
    </div>
  );
};

export default EmojiApp;
