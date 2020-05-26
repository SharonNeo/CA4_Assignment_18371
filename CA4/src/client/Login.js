import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../CA4/node_modules/axios/../CA4/node_modules/axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('/api/users', this.state)
            .then(res => {
                if (res.status === 200) {
                    // run the login function in the parent component
                    this.props.handleLogin();
                    // redirect to /
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <div className="is-fluid">
            {/*Navigation bar*/}
                <nav className="navbar has-text-justified has-background-black">
                    <h1 className="navbar-item title is-1 has-text-light">Login Below!</h1>
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
                <form onSubmit={this.onSubmit} className="container is-fluid">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">Enter Your Email</p>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input column is-half"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <p className="help">Enter Your Password</p>
                </div>
                <input className="button is-primary" type="submit" value="Submit" />
            </form>
             </div>
        );
    }
}
export default Login;