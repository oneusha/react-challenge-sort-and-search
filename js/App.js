import React, { Component } from 'react';
import UserList from './components/UserList';
//import getJSON from './utils';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserList />
    );
  }
}
