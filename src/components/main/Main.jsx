import '../../scss/style.scss'
import Autocomplete from '../autocomplete/Autocomplete';
import Movie from '../movie/Movie';
import Search from '../search/Search';
import {useState, useEffect} from 'react';

function Main() {
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const [allMovies, setAllMovies] = useState([]);

  const [slicedMovies, setSlicedMovies] = useState([])

  const handleInputChange = (e)=>{
    // console.log(e)
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }
   
    useEffect(()=>{
    if(searchTerm.length > 2){  
      try{
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=f81053f8495120bde8069d2bb86d703f&language=en-US&query=${searchTerm}`)
          .then(response=>response.json())
          .then(data=>setAllMovies(data.results))
      }catch(msg){
          console.log(msg)
      }
      setSlicedMovies(allMovies.slice(0,8));
    }else{
      setSlicedMovies([]);
    }
    
    },[searchTerm])
  
    console.log('Movies: ', allMovies);
    console.log('sliced movies:', slicedMovies);

    const [chosenMovie, setChosenMovie] = useState({
      title: '',
      rating: '',
      year: '',
      language: '',
      votes: '',
      overview: '',
      image: ''
    })

    const choiseHandler =(title, rating, year, language, votes, overview, image)=>{
      console.log('title:', title);
      
      setChosenMovie({
        title: title,
        rating: rating,
        year: year,
        language: language,
        votes: votes,
        overview: overview,
        image: image
      })
      console.log('Chosenmovie', chosenMovie);
      // setSearchTerm(chosenMovie.title);
      setSlicedMovies([]);
    }

  return (
    <div className="container">
      <div className="search-box">
        <Search onSearch={handleInputChange} val={searchTerm}/>
        <ul>
          {(searchTerm.length > 2) && slicedMovies.map((movie,i) =>
          <Autocomplete 
            key={i}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date}
            language={movie.original_language}
            votes={movie.vote_count}
            overview = {movie.overview}
            image ={movie.poster_path}
            handleChoise={choiseHandler}
          />
          )}
        </ul>
      </div>
      {(chosenMovie.title !== '') && <Movie
                data = {chosenMovie}
      />}
    </div>
  );
}

export default Main;