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
  generateSectionTwo = () => {
    return <div className="table-grid">
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
      </section>
      <section className="__column">
        {this.generateElements(4)}
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
        {this.generateSectionTwo()}
      </Fragment>



    );
  }
}
export default Table;