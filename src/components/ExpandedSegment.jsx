import React, { Component } from "react";
import "./expandedSegment.scss";
import conceptImage from '../elementsPictures/1.jpeg';

class ExpandedSegment extends Component {
  render() {
    return (
      <div className="segmentContainer">
        <div className="animatedBorder">
          <div className="periodicElement">
            <div>{this.props.atomic_n}</div>
            <div>{this.props.atomic_s}</div>
            <div>{this.props.atomic_name}</div>
            <div>{this.props.atomic_w}</div>
          </div>
        </div>
        <div className="descriptionContainer">{this.props.description}</div>
        <div className="parentContainer">
          <div className="basicBorder">
            <div className="examples">{this.props.examples}</div>
          </div>
          <div className="basicBorder">
            <div className="finderDetails">
              <img src={require(conceptImage)} alt="finder of the element" width="10px" height="10px"/>
              Discovered in {this.props.date} by {this.props.discovered_by}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExpandedSegment;
