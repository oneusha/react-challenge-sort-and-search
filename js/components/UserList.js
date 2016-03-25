import React, { Component } from 'react';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <span>{this.props.users[0].name}</span>
    ); 
  }
};
