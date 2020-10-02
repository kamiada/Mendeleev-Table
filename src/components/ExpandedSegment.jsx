import React, { Component } from "react";
import './expandedSegment.scss';
class ExpandedSegment extends Component {

  render() {
    return (
      <div className="segmentContainer">
        <div className="animatedBorder">
          <div className="periodicElement">
            <div>
              {this.props.atomic_n}
            </div>
            <div>
              {this.props.atomic_s}
            </div>
            <div>
              {this.props.atomic_name}
            </div>
            <div>
              {this.props.atomic_w}
            </div>
          </div>
        </div>
        <div className="descriptionContainer">
          {this.props.description}
        </div>
        <div className="finderDetails">
          {this.props.date}
        </div>
      </div>
    )
  }
}
export default ExpandedSegment;