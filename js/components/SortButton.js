import React, { Component } from 'react';

export default class SortButton extends Component {
  constructor(props) {
    super(props);
    
    let iconType = this.props.type === 'age' ? 'numeric' : 'alpha';
    
    this.icon = `fa fa-sort-${iconType}-${this.props.direction}`;
  }
  
  clickHandler() {
    this.props.sort(this.props.type, this.props.direction);
  }
  
  render() {
    return (
      <i onClick={this.clickHandler.bind(this)}
         className={this.icon + ' input-group-addon btn'} title={'Sort by ' + this.props.type} />
    );
  }
}