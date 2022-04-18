import React, { Component, useState } from "react";
import './SavedMoviesList.css'


const SavedMoviesList = (props) => {
    console.log('passed db data as json', props.savedmovies.data)
    if (props.savedmovies != null) {
        return (
            <div id='savedMovieComponentId'>
                <div className="no-column">
                    {
                        props.savedmovies.data.map((item, i) =>
                            <div key={Math.random} className="SavedMovies">
                                <div className="Thumbnails">
                                    <img className="sImage" src={item.poster} />
                                    <p className="TextOnImage">{item.released}</p>
                                    <h3 className="TextOnImage1">{item.title}</h3>
                                    <p className="TextOnImage2">{item.genre}</p>
                                    <p className="TextOnImage3">&#128077; {item.ratings}</p>
                                    {item.Source}: <span>{item.Value}</span>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>


        )

    } else {
        return (
            <p className="Error">Something went Wrong!!</p>
        )
    }

}
export default SavedMoviesList;