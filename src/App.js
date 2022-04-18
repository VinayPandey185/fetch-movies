import './App.css';
import React, { Component } from 'react'
import MovieDetails from './MovieDetails'
import SearchMovieForm from './SearchMovieForm';
function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <h3>Search all your movies here!</h3>
      <hr></hr>
      <SearchMovieForm />

    </div>
  );
}

export default App;
