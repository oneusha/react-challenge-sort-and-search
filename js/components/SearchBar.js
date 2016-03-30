import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange(e) {
    this.props.filter(e.currentTarget.value);
  }
  
  render() {
    return (
      <input onChange={this.handleChange.bind(this)}
             type="search" className="form-control" placeholder="Start type a name..." />
    ); 
  }
};