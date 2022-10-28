const SearchInput = ({ textChange }) => {
  const handleChange = (e) => {
    textChange(e);
  };

  return (
    <div className="search-container">
      <input className="search-input" onChange={handleChange} />
    </div>
  );
};
export default SearchInput;
