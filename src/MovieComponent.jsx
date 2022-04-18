import React, { Component, useState } from "react";
import './MovieComponent.css'
import Axios from 'axios'

const MovieComponent = (props) => {

    //const [title, setTitle] = useState();


    console.log('passed json', props.moviedetails)
    if (props.moviedetails != null && props.moviedetails.Response != 'False') {
        //Save data to database
        //use npm install axios to make http request to send data from client to server
        Axios.post('http://localhost:3001/insert', {
            title: props.moviedetails.Title,
            genre: props.moviedetails.Genre,
            released: props.moviedetails.Released,
            ratings: props.moviedetails.Ratings[0].Value,
            poster: props.moviedetails.Poster
        });
        console.log("Made DB calls, Saved Items.");

        return (
            <div id='movieComponentId'>
                <div className="cloumn1">
                    <img className="image" src={props.moviedetails.Poster} />
                </div>
                <div className="cloumn2">
                    <h2 className="Title">{props.moviedetails.Title}</h2>
                    <h4>About the moview</h4>
                    <p className="About">{props.moviedetails.Plot}</p>
                    <p className="Genre"><b>Genre: </b>{props.moviedetails.Genre}</p>
                    <p className="Released"><b>Released: </b>{props.moviedetails.Released}</p>
                    <p className="Cast"><b>Casts: </b>{props.moviedetails.Actors}</p>
                    <p className="Director"><b>Directed by: </b>{props.moviedetails.Director}</p>
                    <p className="Writer"><b>Written by: </b>{props.moviedetails.Director}</p>
                    <p className="Language"><b>In: </b>{props.moviedetails.Language}</p>
                    <p className="BoxOffice"><b>Earnings: </b>{props.moviedetails.BoxOffice}</p>
                    <div className="Ratings"><b>Ratings: </b>
                        {
                            props.moviedetails.Ratings.map((item, i) =>
                                <li key={i.toString()}>{item.Source}: <span>{item.Value}</span></li>
                            )
                        }</div>
                </div>
            </div>


        )

    } else {
        return (
            <p className="Error">Movie not found</p>
        )
    }

}
export default MovieComponent;