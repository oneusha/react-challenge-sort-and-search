import React, {Component} from 'react';
import SortButton from './SortButton';

export default class Toolbar extends Component {
  
  render() {
    return (
      <span className="">
        <SortButton type="age" direction="asc" sort={this.props.sort} />
        <SortButton type="name" direction="asc" sort={this.props.sort} /> 
      </span>
    );
  }
}