import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { SearchContainer, SearchIcon } from "../styles/StyledSearchBar";

function SearchBar() {
  const navigateTo = useNavigate();

  const [searchQuery, setSearchQuery] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigateTo(`/search-result/${searchQuery}`);

    setSearchQuery(``);
  };

  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e)}>
      <div>
        <BsSearch style={SearchIcon} />
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="What would like to cook today?"
        />
      </div>
    </SearchContainer>
  );
}

export default SearchBar;
