import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ onTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const formSubmitHandler = e => {
    e.preventDefault();

    onTermSubmit(searchTerm);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={formSubmitHandler} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onInput={e => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
