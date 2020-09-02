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
  generateRows = (y,x) =>{
    let rows = []
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
      <Fragment>
        {this.generateSectionOne()}
        {this.generateColumn(9, 4)}
        {this.generateColumn(5, 6)}
        <div className="section_four">
          {this.generateColumn(1, 7)}
        </div>
        <div className="section_five">
          {this.generateColumn(14, 2)}
        </div>
      </Fragment>



    );
  }
}
export default Table;