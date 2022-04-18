import './MovieDetails.css';
import MovieComponent from './MovieComponent';
import React from 'react';

class MovieDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            moviedetails: null
        }
    }
    componentDidMount() {
        fetch('https://www.omdbapi.com/?t=' + this.props.moviename + '&apikey=38682202').then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({ moviedetails: result })
            })
        })
    }

    render() {
        console.log('MovieDetails Props: ', this.props);
        return (
            <div className="MovieDetails" id='moviedetailsId' >
                <h3>Showing details for: {this.props.moviename} </h3>
                <MovieComponent moviedetails={this.state.moviedetails ? this.state.moviedetails : this.state.hasError} />
            </div >
        );

    }

}
export default MovieDetails;
