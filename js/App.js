import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import utils from './utils';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.originalUsers = [];
    
    this.state = {
      users: [],
      activeUser: null,
      sort: {
        direction: 'asc',
        type: 'name'
      }
    };
    
    this.loadUsers();
  }
  
  loadUsers() {
    utils.getJSON('data.json')
    .then(function (users) {
      this.originalUsers = users;
      this.setState({ users });
    }.bind(this));
  }
  
  selectUser(activeUser) {
    this.setState({ activeUser })
  }
  
  sort(type, direction) {
    let compare = (first, next) => {
      if (first[type] > next[type]) {
        return 1;
      }
      
      if (first[type] < next[type]) {
        return -1;
      }
      
      return 0;
    };
    
    this.state.users.sort(compare);
    
    this.setState({ 
      users: this.state.users,
      sort: {
        direction,
        type
      }
    });
  }
  
  filter(input) {
      input = input.toLowerCase();
    
      let users = this.originalUsers.filter(user => {
          return user.name.toLowerCase().indexOf(input) >= 0;
      });
    
      this.setState({ users });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <div className="input-group">
                <SearchBar filter={this.filter.bind(this)} />
                <Toolbar sort={this.sort.bind(this)} options={this.state.sort} />
              </div>
            </div>
            <UserList users={this.state.users} selectUser={this.selectUser.bind(this)}/>
          </div>
          <div className="col-sm-8">
            <ActiveUser user={this.state.activeUser} />
          </div>
        </div>
      </div>
    );
  }
}
