import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteSearch({ onSearch, defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword || '');

  const handleSearchChange = (event) => {
    const { value } = event.target;

    setKeyword(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSearch(keyword);
  };

  return (
    <div className="note-search">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Cari catatan..."
          value={keyword}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}

NoteSearch.propTypes = {
  onSearch: PropTypes.func,
  defaultKeyword: PropTypes.string,
};

export default NoteSearch;