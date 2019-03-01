import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Post from './components/Post/Post';
// import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'

export default(
  <Switch>
    <Route path="/new" component={Form}/>
    <Route path="/post/:postid" component={Post}/>
    <Route path="/dashboard"  component={Dashboard}/>
    <Route path="/" exact component={Auth}/>
  </Switch>
)