import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import utils from './utils';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users: [],
      activeUser: null
    }
    
    this.loadUsers();
  }
  
  loadUsers() {
    utils.getJSON('data.json')
    .then(function (data) {
      this.setState({users: data});
    }.bind(this));
  }
  
  selectUser(activeUser) {
    this.setState({activeUser})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-2">
          <UserList users={this.state.users} selectUser={this.selectUser.bind(this)}/>
        </div>
        <div className="col-sm-10">
          <ActiveUser user={this.state.activeUser} />
        </div>
      </div>
    );
  }
}
