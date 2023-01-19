import "../style/search.css";
import SearchIcon from "../images/search-icon.svg";

const HomeSearch = () => {
  return (
    <div className="search__bar">
      <img src={SearchIcon} alt="search" />
      <input type="search" placeholder="search..." />
    </div>
  );
};

export default HomeSearch;
