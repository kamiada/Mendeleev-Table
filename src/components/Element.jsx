import React, { Component } from 'react';
import './base.scss';
import './element.scss';
class Element extends Component {
  handleClick(){
    console.log('The link was clicked.');
    
  }

  render() {
    return (
      <div className="element" onClick={this.handleClick}>
        <div className="-atomic_numb"> {this.props.atomicNumb}</div>
        <div className="-symbol"> {this.props.symbol}</div>
        <div className="-name"> {this.props.name}</div>
        <div className="-atomic_weight"> {this.props.atomicWeight}</div>
      </div>
    );
  }
}
export default Element;