function Autocomplete({title, rating, year, language, votes, overview, image, handleChoise}) {
    console.log('autocomplete');
    return (
      <>
        <li onClick={()=>handleChoise(title, rating, year, language, votes, overview, image)}>
            <p className="title">{title}</p>
            <p className="info">{rating} Rating, {year}</p>
        </li>
      </>
    );
  }
  
  export default Autocomplete;