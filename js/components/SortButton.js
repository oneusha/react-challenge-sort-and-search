import React, { Component } from 'react';

export default class SortButton extends Component {
  constructor(props) {
    super(props);
    this.iconType = this.props.type === 'age' ? 'numeric' : 'alpha';
  }
  
  clickHandler() {
    this.props.sort(this.props.type);
  }
  
  render() {
    let icon = `fa fa-sort-${this.iconType}-${(this.props.direction < 0 && this.props.isActive) ? 'desc' : 'asc'}`;

    return (
      <i onClick={this.clickHandler.bind(this)}
         className={icon + ' btn btn-primary' + (this.props.isActive ? ' active' : '')} title={'Sort by ' + this.props.type} />
    );
  }
}