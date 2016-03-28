import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  render() {
    let users = [];
    this.props.users.forEach(user => {
      users.push(<UserData user={user} key={user.id} selectUser={this.props.selectUser} />);
    })
    return (
      <div className="list-group">{users}</div>
    ); 
  }
};
