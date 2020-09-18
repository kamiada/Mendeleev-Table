import React, { Component, Fragment } from 'react';
import Element from './Element';
import './tableV2.scss';

class TableV2 extends Component {
  render() {
    return (
      <Fragment>

        <div className="container">
          <h1 className="title">Periodic Table</h1>
          {/* optimise this bs below with some loop */}
          <div className="one-div-to-hold-them-all">
            {/* row1 */}
            <div className="square"><Element atomicNumb='1' symbol='H' name='Hydrogen' atomicWeight='1.0078'/>
            </div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"><Element /></div>

            {/* row2 */}
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>


            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>

            {/* row3 */}
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>


            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>

            {/* row4 */}
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>


            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>

            {/* row5 */}
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>


            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>

            {/* row6 */}
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>


            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>

            {/* row7 */}
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>


            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>

            {/* row8 */}
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>


            {/* row9 */}
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            {/* row10 */}
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>


            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"></div>

            {/*row 11*/}
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>


            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"><Element /></div>
            <div className="square"></div>

          </div>
        </div>

        <div className="footer">
          <p>footer</p>
        </div>
      </Fragment>

    );
  }
}

export default TableV2;