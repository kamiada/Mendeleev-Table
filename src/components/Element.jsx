import React, { Component } from 'react';
import './element.scss';
class Element extends Component {
  render() {
    return (
      <button className="element" >
        <div className="-atomic_numb"> {this.props.atomicNumb}</div>
        <div className="-symbol"> {this.props.symbol}</div>
        <div className="-name"> {this.props.name}</div>
        <div className="-atomic_weight"> {this.props.atomicWeight}</div>
      </button>
    );
  }
}
export default Element;