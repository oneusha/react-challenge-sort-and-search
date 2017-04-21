import React, { Component } from 'react';

export default class UserData extends Component {
  handleClick() {
    this.props.selectUser(this.props.user);
  }
  
  render() {
    let user = this.props.user;
    let image = '/images/' + user.image + '.svg';
    let searchString = this.props.searchString;

    let name = { __html: searchString ? user.name.replace(new RegExp(searchString, 'gi'), `<b>$&</b>`) : user.name };
    
    return (
      <button className={'media list-group-item' + (this.props.isActive ? ' active' : '')} onClick={this.handleClick.bind(this)}>
        <div className="media-left">
          <img className="media-object" src={image} width="80" height="80"/>
        </div>
        <div className="media-body">
          <h4 className="media-heading" dangerouslySetInnerHTML={name}></h4>
          <div className="age">Age: {user.age}</div>
          <div className="phone">Phone: {user.phone}</div>
        </div>
      </button>
    ); 
  }
};