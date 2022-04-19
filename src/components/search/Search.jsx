import Autocomplete from "../autocomplete/Autocomplete";
import movieIcon from "../../icons/movie.svg"

const Search = ({val, onSearch, ...props})=>{
  console.log(val);
  return(
      <div className="search mb-5">
          <img src={movieIcon} className="movieIcon" alt="movie" />
          <input
            value = {val}
            className = "form-control"
            onChange={onSearch}
            placeholder = "Search for a movie."
            {...props}
          />
      </div>
    );
  }
  
  export default Search;