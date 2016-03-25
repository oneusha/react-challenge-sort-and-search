import React, { Component } from 'react';
import UserList from './components/UserList';
import utils from './utils';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  loadUsers() {
    utils.getJSON('data.json')
    .then(function (data) {
      this.state.users = data;
    });
  }

  render() {
    return (
      <UserList users={this.state.users} />
    );
  }
}
