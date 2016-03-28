import React, { Component } from 'react';

export default class ActiveUser extends Component {
  render() {
    let user = this.props.user;
    let result = <span>Choose a user</span>;
    
    if (user) {
      let image = '/images/' + user.image + '.svg';
      
      result = (
        <div className="media">
          <div className="media-left">
            <img className="media-object" src={image} width="500" height="500"/>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{user.name}</h4>
            <div className="age">Age: {user.age}</div>
            <div className="phone">Phone: {user.phone}</div>
            <div className="prase">{user.phrase}</div>
          </div>
        </div>
      )
    }
    
    return result; 
  }
};