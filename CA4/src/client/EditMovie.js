import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from '../../../CA4/node_modules/axios/../CA4/node_modules/axios';

//Edit Movie component that will edit the clicked on user with passed id
class EditMovie extends Component {
    constructor(props) {
        super(props);
        // store the related to the user information into the state
        // these should match the user object from the API
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

    // fetch the related user data
    componentDidMount() {
        // get the users API and include the id which is passed via the URL and accessed via props
        axios.get('/api/movies/' + this.props.match.params.id)
            .then(response => {
                //on resonse set the state values to match empty state values set in the constructor
                this.setState({
                    _id: response.data._id,
                    title: response.data.title,
                    plot: response.data.plot,
                    released: response.data.released,
                    type: response.data.type,
                    poster: response.data.poster,
                    review: response.data.review,
                    runtime: response.data.runtime,
                    language: response.data.language,
                    genres: response.data.genres,
                    director: response.data.director,
                    writers: response.data.writers,
                    stars: response.data.stars,
                });
            })
            .catch(error => {
                console.log(error);
            });
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

        // use axios to send a PUT request to the server which includes the updated state information
        axios.put('/api/movies', this.state)
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
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                    <nav className="navbar has-background-black">
                    <h2 className="navbar-item title is-1 has-text-light">Edit Movie</h2>
                    </nav>
                    <hr />
                    {/*main container for input fields*/}
                    <div className="container">
                        {/*FIRST COLUMN*/}
                        <div className="columns">
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

export default EditMovie;
