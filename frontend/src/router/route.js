import React, {Component} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import App from '../app/notes-page'

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path ="/register" component = {App} />
        <Route path ="/login" component = {App} />
        <Route path ="/logout" component = {App} />
        <Route path="/notes" component={App}/>
        <Route path="/notes/add" component={App} />
        <Route path="/notes/edit/$id" component={App} />
        <Route path="/notes/delete" component={App} />
      </Switch>
    );
  }
}

export default Router;