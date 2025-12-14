import React, { useEffect, useState } from 'react';
import { sweetService } from '../services/sweetService';

interface Props {
  onSearch: (data: any[]) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  // ✅ common search function
  const performSearch = async () => {
    const params: any = {};

    if (name.trim()) params.name = name.trim();
    if (category.trim()) params.category = category.trim();

    const data = await sweetService.search(params);
    onSearch(data);
  };

  // ✅ LIVE SEARCH (when user types)
  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      performSearch();
    }, 400); // debounce delay (ms)

    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [name, category]);

  // ✅ BUTTON SEARCH (manual)
  const handleSearchClick = () => {
    performSearch();
  };

  return (
    <div className="row g-2">
      <div className="col">
        <input
          className="form-control"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col">
        <input
          className="form-control"
          placeholder="Search by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="col-auto">
        <button className="btn btn-primary" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
