import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CreateMovie from './CreateMovie';
import EditMovie from './EditMovie';
import MovieList from './MovieList';
import Login from './Login';
import Register from './Register';


// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={MovieList}/>
        {/*pass the id through the EditMovie component*/}
        <Route path="/edit-movie/:id" component={EditMovie}/>
        {/*set the path to create a new user to CreateMovie component*/}
        <Route path="/create-movie" component={CreateMovie}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    </HashRouter>
  );
};
 
export default App;
