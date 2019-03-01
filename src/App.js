import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom';
import store from "./ducks/store"
import {Provider} from 'react-redux'
import Dashboard from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import routes from './routes'
import {withRouter} from 'react-router-dom'





class App extends Component {
  render() {
    return (

          <div className="App">
            <Nav location={this.props.location}/>
            {routes}
          </div>

    );
  }
}

export default withRouter(App);
