/* eslint-disable no-redeclare */
import React, { Component, Fragment } from "react";
import Element from "./Element";
import "./table.scss";
import data from "../elementsData.json";
import ReactDOM from 'react-dom';

class TableV2 extends Component {
  constructor(props){
    super(props);
    this.printOneAtomicNumb = this.printOneAtomicNumb.bind(this);
    this.printArrayOfAtomicNumbs = this.printArrayOfAtomicNumbs.bind(this);
  }
  printOneAtomicNumb(numb){
    console.log('Hello', numb);
  }
  printArrayOfAtomicNumbs(array){
    console.log(array);
    for(let n = 0; n< array.length; n++){
    console.log('yolo', n)}
  }

  generateEmptySquares = (x) => {
    let squares = [];
    for (var i = 0; i < x; i++) {
      squares.push(<div key={i} className="square"></div>);
    }
    return <Fragment>{squares}</Fragment>;
  };
  fillTable = (data) => {
    const firstElement = (
      <div id={data[0]._id} key={data[0]._id} className="square" onClick={() => this.printOneAtomicNumb(data[0].atomic_number)}>
        <Element
          atomicNumb={data[0].atomic_number}
          symbol={data[0].symbol}
          name={data[0].name}
          atomicWeight={data[0].atomic_weight}
        />
      </div>
    );
    let from1to3 = [];
    let from4to11 = [];
    let from12to89 = [];
    let from90to103 = [];
    let from104to117 = [];
    for (var i = 1; i < data.length; i++) {
      if (i < 4) {
        from1to3.push(
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square" onClick={()=> this.printArrayOfAtomicNumbs(from1to3)}>
            <Element
              atomicNumb={data[i].atomic_number}
              symbol={data[i].symbol}
              name={data[i].name}
              atomicWeight={data[i].atomic_weight}
            />
          </div>
        );
      }
    }
    for (var i = 4; i < data.length; i++) {
      if (i < 12) {
        from4to11.push(
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square">
            <Element
              atomicNumb={data[i].atomic_number}
              symbol={data[i].symbol}
              name={data[i].name}
              atomicWeight={data[i].atomic_weight}
            />
          </div>
        );
      }
    }
    for (var i = 12; i < data.length; i++) {
      if (i < 90) {
        from12to89.push(
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square">
            <Element
              atomicNumb={data[i].atomic_number}
              symbol={data[i].symbol}
              name={data[i].name}
              atomicWeight={data[i].atomic_weight}
            />
          </div>
        );
      }
    }
    for (var i = 90; i < data.length; i++) {
      if (i < 104) {
        from90to103.push(
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square">
            <Element
              atomicNumb={data[i].atomic_number}
              symbol={data[i].symbol}
              name={data[i].name}
              atomicWeight={data[i].atomic_weight}
            />
          </div>
        );
      }
    }
    for (var i = 104; i < data.length; i++) {
      if (i < 118) {
        from104to117.push(
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square">
            <Element
              atomicNumb={data[i].atomic_number}
              symbol={data[i].symbol}
              name={data[i].name}
              atomicWeight={data[i].atomic_weight}
            />
          </div>
        );
      }
    }

    return (
      <Fragment>
        {firstElement}
        {this.generateEmptySquares(16)}
        {from1to3}
        {console.log(from1to3)}
        {this.generateEmptySquares(10)}
        {from4to11}
        {this.generateEmptySquares(10)}
        {from12to89}
        {this.generateEmptySquares(39)}
        {from90to103}
        {this.generateEmptySquares(4)}
        {from104to117}
      </Fragment>
    );
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">Periodic Table</h1>
        <div className="one-div-to-hold-them-all">{this.fillTable(data)}</div>
      </div>
    );
  }
}

export default TableV2;
