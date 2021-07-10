import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
// import TableComponent from './components/TableComponent'
import CreateContainer from './containers/CreateContainer';
import DetailContainer from './containers/DetailContainer';
import EditContainer from './containers/EditContainer';
import HomeContainer from './containers/HomeContainer';

export class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Router>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateContainer} />
          <Route path="/detail/:id" exact component={DetailContainer} />
          <Route path="/edit/:id" exact component={EditContainer} />
        </Router>
      </div>
    )
  }
}

export default App
