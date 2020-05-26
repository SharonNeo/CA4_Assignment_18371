import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import Movie from './Movie';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from '../../../CA4/node_modules/axios/../CA4/node_modules/axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import '../../../CA4/node_modules/bulma/css/bulma.cssodules/bulma/css/bulma.css';

// this component will handle all elements in the users array
class MovieList extends Component {
    constructor(props) {
        super(props);
        // store the users array in the state
        this.state = { movies: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateMovies = this.updateMovies.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all user data from the server when the component mounts
    componentDidMount() {
        this.updateMovies();
    }

    //
    updateMovies() {
        // get the users API using axios GET request to the server 
        axios.get('api/movies')
            .then(response => {
                //store the response in the state
                this.setState({ movies: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(movieId) {
        // make a DELETE request to the server which will handle the removal of the user with the specific userId
        axios
            .delete('api/movies', {
                data: {
                    id: movieId
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of users
                this.updateMovies();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a User component for each user object
        const movieList = this.state.movies.map(u => (
            //map through each element in the array and set to the value received from the server
            <Movie
                key={u._id}
                id={u._id}
                title={u.title}
                plot={u.plot}
                released={u.released}
                image={u.poster}
                type={u.type}
                review={u.review}
                runtime={u.runtime}
                language={u.language}
                genres={u.genres}
                director={u.director}
                writers={u.writers}
                stars={u.stars}

                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of movie
        return (
            <div className="is-fluid">
                {/*Navigation bar*/}
                <nav className="navbar has-text-justified has-background-black">
                    <h1 className="navbar-item title is-1 has-text-light">List of Movie</h1>
                    {/*when this button is pressed, CreateMovie component will be rendered by using React Router*/}
                    <Link to={'/'} className="navbar-item navbar-end has-background-black">
                        <button className="button is-warning" type="button">Home</button>
                    <Link to={'/create-movie'} className="navbar-item navbar-end has-background-black">
                        <button className="button is-warning" type="button">Create New Movie</button>
                    <Link to={'/login'} className="navbar-item navbar-end has-background-black">
                        <button className="button is-warning" type="button">Sign In</button>
                    <Link to={'/register'} className="navbar-item navbar-end has-background-black">
                        <button className="button is-warning" type="button">Register</button>
                    </Link>
                    </Link>
                    </Link>
                    </Link>
                </nav>
              
                {/*MOVIE LIST*/}
                <div>
                    <div className="columns is-multiline has-background-grey-light container is-fluid">
                        {movieList}
                    </div>
                </div>
                {/*FOOTER*/}
                <footer className="footer has-background-black">
                    <div className="content has-text-centered ">
                        <p className="has-text-white-bis "><strong className= "has-text-white">2020 © copyright by Sharon</strong> </p>
                    </div>
                </footer>
            </div>

        );
    }
}

export default MovieList;
