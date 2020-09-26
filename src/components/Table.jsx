/* eslint-disable no-redeclare */
import React, { Component, Fragment } from "react";
import Element from "./Element";
import "./table.scss";
import data from "../elementsData.json";

class TableV2 extends Component {
  state = {
    isClicked: false,
  }
  constructor(props){
    super(props);
    this.getAtomicNumberTest = this.getAtomicNumberTest.bind(this);
    this.getAtomicNumber = this.getAtomicNumber.bind(this);
    this.checkIsClicked = this.checkIsClicked.bind(this);
    this.renderClicked = this.renderClicked.bind(this);
  }
  getAtomicNumberTest(numb){
    return numb;
  }
  getAtomicNumber(array){
    console.log(array);
    var element = "";
    for(element in array){
     console.log(array[element].key);
     return array[element].key;
    }
  }
  checkIsClicked = () => {
  if(this.state.isClicked === false){
  this.setState({
    isClicked: true,
  })}
  else{
    this.setState({
      isClicked: false,
    })}
  }
  renderClicked= (atomic_numb, dataArray) =>{
    const chosenElement = dataArray.filter(data => data.atomic_number === atomic_numb);
    return <div className="pickedElement">
      {console.log('here', chosenElement[0].name)}
      {chosenElement}
    </div>
    
  }
  
  generateEmptySquares = (x) => {
    let squares = [];
    for (var i = 0; i < x; i++) {
      squares.push(<div key={i} className="square"></div>);
    }
    return <Fragment>{squares}</Fragment>;
  };


  fillTable = (data) => {
    const { isClicked } = this.state;

    const firstElement = (
      <div id={data[0].atomic_number} key={data[0].atomic_number} className={isClicked ? "disappear" : "square"} onClick={() => 
      {this.checkIsClicked();
      this.renderClicked(this.getAtomicNumberTest(data[0].atomic_number), data);}
      } >
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
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square" onClick={()=> this.getAtomicNumber(from1to3)}>
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
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square" >
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
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square" >
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
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square" >
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
          <div id={data[i].atomic_number} key={data[i].atomic_number} className="square" >
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
      <div className={isClicked ? "blurredOutTable" :  "one-div-to-hold-them-all"} onClick={isClicked===true ? () => this.checkIsClicked() : ''}>
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
      </div>
    );
  };
  render() {
    return (
      <div className="container" >
        <h1 className="title">Periodic Table</h1>
        <Fragment>{this.fillTable(data)}</Fragment>
      </div>
    );
  }
}

export default TableV2;
