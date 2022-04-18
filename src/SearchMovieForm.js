import MovieDetails from './MovieDetails';
import SavedMoviesList from './SavedMoviesList';
import './SearchMovieForm.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function SearchMovieForm() {
    const [data, setData] = useState(null);
    function getData(val) {
        setData(val.target.value)
    }

    //used as form key, which changes everytime on click as +1 and changes the id for the form, which resets it
    const [formKey, setFormKey] = useState(0);

    //Read data from saved Datasets
    const [savedmovies, setSavedMovies] = useState();
    const [showallmovies, setShowAllMovies] = useState(false);

    const [moviename, setMoviename] = useState(data);
    const [showmovie, setShowmovie] = useState(false);

    const handleClick = (mName) => {
        mName = document.getElementById('movieId').value;
        setMoviename(mName);
        console.log('Searching for ' + moviename);
        setShowmovie(true);
        console.log('showmovie: ' + showmovie);
        setFormKey(formKey + Math.random())
        console.log('Search counter: ' + formKey)

    }

    //useEffect used for reading from DB
    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            console.log("Data from DB: ", response);
            setSavedMovies(response);
        })
    }, [])

    const showAllClick = () => {
        console.log("Show All Saved Movie Button clicked");
        setShowAllMovies(true);
    }

    return (
        <div className='SearchMovieForm'>
            <input id="movieId" type="text" name="movieName" placeholder='Enter movie name to search here' onChange={getData} />
            <h3>Searching for "{data}" ?</h3>
            <button name='search' onClick={() => handleClick()} >Search </button>
            <button className='showAll' name='showall' onClick={() => showAllClick()} >Show All Saved Movies </button>
            <div id='movieSectionId'>
                {showmovie ? <MovieDetails moviename={moviename} key={formKey + 1} /> : null}
                <br></br>
                {showallmovies ? <SavedMoviesList savedmovies={savedmovies} key={formKey + 2} /> : null}
            </div>
        </div>
    );
}

export default SearchMovieForm;