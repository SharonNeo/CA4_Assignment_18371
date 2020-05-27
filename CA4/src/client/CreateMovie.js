import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';

//Create Move component that will create a new user card
class CreateMovie extends Component {
    constructor(props) {
        super(props);
        // the form fields are stored in a state
        this.state = { 
            title: '', 
            plot: '', 
            released: '', 
            type: '', 
            poster: '',
            review: '',
            runtime: '',
            language: '',
            genres: '',
            director: '',
            writers: '',
            stars: ''
        };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //once the input boxes are changed, update the state to match the value
    handleChange(event) {
        //name of the input boxes must match the property names in the state
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
        event.preventDefault();

        //use axios to send a POST request to the server which includes the state information for the new user to be created
        axios.post('/api/movies', this.state)
            //on success go to home
            .then(res => this.props.history.push('/'))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // remember that the name of the input fields should match the state
        return (
            <div className="is-fluid">
             {/*Navigation bar*/}
                <nav className="navbar has-text-justified has-background-black">
                    <h1 className="navbar-item title is-1 has-text-light">Create a New Movie</h1>
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
                <hr/>
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                    {/*main container for input fields*/}
                    <div className="container">
                    {/*FIRST COLUMN*/}
                    <div className="columns ">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label"> Movie Title: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="title" value={this.state.title} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Director: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="director" value={this.state.director} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Writers: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="writers" value={this.state.writers} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Stars: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="stars" value={this.state.stars} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Type: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="type" value={this.state.type} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Poster: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="poster" value={this.state.poster} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                            </div>
                        {/*SECOND COLUMN*/}
                        <div className="column">
                                <div className="field">
                                    <label className="label"> Runtime: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="runtime" value={this.state.runtime} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Released: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="released" value={this.state.released} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Language: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="language" value={this.state.language} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                 <div className="field">
                                    <label className="label"> Genres: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="genres" value={this.state.genres} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label"> Plot: </label>
                                    <div className="control">
                                        <input className="input is-small" type="text" name="plot" value={this.state.plot} onChange={this.handleChange} id="form" />
                                    </div>
                                </div>
                                <div className="field">
                                <label className="label"> Review: </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="review" value={this.state.review} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                            </div>
                        </div>
                    {/*SUBMIT BUTTON*/}
                    <input className="button is-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateMovie;
