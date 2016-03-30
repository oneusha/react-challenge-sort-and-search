import React, { Component } from 'react';

export default class ActiveUser extends Component {
  render() {
    let user = this.props.user;
    let result = <span>Choose a user</span>;
    
    if (user) {
      let image = '/images/' + user.image + '.svg';
      
      result = (
        <div className="row">
          <div className="col-md-3">
            <img className="media-object" src={image} width="100%" height="auto" title={user.name} alt={user.name} />
          </div>
          <div className="col-md-9">
            <h2 className="media-heading">{user.name}</h2>
            <div className="age">Age: {user.age}</div>
            <div className="phone">Phone: {user.phone}</div>
            <p className="prase">{user.phrase}</p>
          </div>
        </div>
      )
    } 
    
    return result; 
  }
};