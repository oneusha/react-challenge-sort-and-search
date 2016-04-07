import React, {Component} from 'react';
import SortButton from './SortButton';

export default class Toolbar extends Component {
  
  render() {
    return (
      <span className="input-group-btn">
        <SortButton type="age" direction={this.props.options.direction} isActive={this.props.options.type === 'age'} sort={this.props.sort} />
        <SortButton type="name" direction={this.props.options.direction} isActive={this.props.options.type === 'name'} sort={this.props.sort} /> 
      </span>
    );
  }
}