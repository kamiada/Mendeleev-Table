import React, { Component, Fragment } from 'react';
import Element from './Element';
import './table.scss';
class Table extends Component {
  generateElements = (x) => {
    let elements = [];
    for (var i = 0; i < x; i++) {
      elements.push(<Element key={i} />)
    }
    return <div>{elements}</div>
  };
  generateColumn = (y, x) => {
    let columns = [];
    for (var i = 0; i < y; i++) {
      columns.push(
        <section className="__column">
          {this.generateElements(x)}
        </section>
      )
    }
    return <div className="table-grid">{columns}</div>
  }
  generateSectionOne = () => {
    return <div className="table-grid">
      <section className="__column">
        {this.generateElements(7)}
      </section>
      <section className="__column">
        {this.generateElements(6)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
    </div>
  }
  render() {
    return (
      <div className="container">

        <div className="section_one">
          {this.generateSectionOne()}
        </div>
        <div className="section_two">
          {this.generateColumn(9, 4)}
        </div>
        <div className="section_three">
          {this.generateColumn(5, 6)}
        </div>
        <div className="section_four">
          {this.generateColumn(1, 7)}
        </div>
        <div className="section_five">
          {this.generateColumn(14, 2)}
        </div>

      </div>



    );
  }
}
export default Table;