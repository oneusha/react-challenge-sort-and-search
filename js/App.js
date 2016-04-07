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
        direction: 1,
        type: null
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
  
  sort(type) {
    let direction = type === this.state.sort.type ? -this.state.sort.direction : 1;

    let compare = (first, next) => {
      if (first[type] > next[type]) {
        return direction;
      }
      
      if (first[type] < next[type]) {
        return -direction;
      }
      
      return direction * (first.id - next.id);
    };
    
    this.state.users.sort(compare);
    
    this.setState({
      users: this.state.users,
      activeUser: this.state.users[0],
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
    
      this.setState({ 
        users,
        activeUser: users[0]
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group">
              <div className="input-group">
                <SearchBar filter={this.filter.bind(this)} />
                <Toolbar sort={this.sort.bind(this)} options={this.state.sort} />
              </div>
            </div>
            <UserList users={this.state.users} activeUserId={this.state.activeUser ? this.state.activeUser.id : null} selectUser={this.selectUser.bind(this)}/>
          </div>
          <div className="col-sm-8">
            <ActiveUser user={this.state.activeUser} />
          </div>
        </div>
      </div>
    );
  }
}
