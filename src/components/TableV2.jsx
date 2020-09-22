import React, { Component, Fragment } from 'react';
import Element from './Element';
import './tableV2.scss';
import data from '../elementsData.json';


class TableV2 extends Component {

  render() {
    const elements = data;

    return <Fragment>
      {elements ? (
        <Fragment>

          <div className="container">
            <h1 className="title">Periodic Table</h1>
            {/* optimise this bs below with some loop */}
            <div className="one-div-to-hold-them-all">
              {/* row1 */}
              <div className="square"><Element atomicNumb={data[0].atomic_number} symbol={data[0].symbol} name={data[0].name} atomicWeight={data[0].atomic_weight} />
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
              <div className="square"><Element atomicNumb={data[1].atomic_number} symbol={data[1].symbol} name={data[1].name} atomicWeight={data[1].atomic_weight} />
              </div>
              {/* row2 */}
              <div className="square"><Element
                atomicNumb={data[2].atomic_number} symbol={data[2].symbol} name={data[2].name} atomicWeight={data[2].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[3].atomic_number} symbol={data[3].symbol} name={data[3].name} atomicWeight={data[3].atomic_weight}
              /></div>
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
              <div className="square"><Element
                atomicNumb={data[4].atomic_number} symbol={data[4].symbol} name={data[4].name} atomicWeight={data[4].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[5].atomic_number} symbol={data[5].symbol} name={data[5].name} atomicWeight={data[5].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[6].atomic_number} symbol={data[6].symbol} name={data[6].name} atomicWeight={data[6].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[7].atomic_number} symbol={data[7].symbol} name={data[7].name} atomicWeight={data[7].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[8].atomic_number} symbol={data[8].symbol} name={data[8].name} atomicWeight={data[8].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[9].atomic_number} symbol={data[9].symbol} name={data[9].name} atomicWeight={data[9].atomic_weight}
              /></div>

              {/* row3 */}
              <div className="square"><Element
                atomicNumb={data[10].atomic_number} symbol={data[10].symbol} name={data[10].name} atomicWeight={data[10].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[11].atomic_number} symbol={data[11].symbol} name={data[11].name} atomicWeight={data[11].atomic_weight}
              /></div>
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
              <div className="square"><Element
                atomicNumb={data[12].atomic_number} symbol={data[12].symbol} name={data[12].name} atomicWeight={data[12].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[13].atomic_number} symbol={data[13].symbol} name={data[13].name} atomicWeight={data[13].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[14].atomic_number} symbol={data[14].symbol} name={data[14].name} atomicWeight={data[14].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[15].atomic_number} symbol={data[15].symbol} name={data[15].name} atomicWeight={data[15].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[16].atomic_number} symbol={data[16].symbol} name={data[16].name} atomicWeight={data[16].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[17].atomic_number} symbol={data[17].symbol} name={data[17].name} atomicWeight={data[17].atomic_weight}
              /></div>

              {/* row4 */}
              <div className="square"><Element
                atomicNumb={data[18].atomic_number} symbol={data[18].symbol} name={data[18].name} atomicWeight={data[18].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[19].atomic_number} symbol={data[19].symbol} name={data[19].name} atomicWeight={data[19].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[20].atomic_number} symbol={data[20].symbol} name={data[20].name} atomicWeight={data[20].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[21].atomic_number} symbol={data[21].symbol} name={data[21].name} atomicWeight={data[21].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[22].atomic_number} symbol={data[22].symbol} name={data[22].name} atomicWeight={data[22].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[23].atomic_number} symbol={data[23].symbol} name={data[23].name} atomicWeight={data[23].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[24].atomic_number} symbol={data[24].symbol} name={data[24].name} atomicWeight={data[24].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[25].atomic_number} symbol={data[25].symbol} name={data[25].name} atomicWeight={data[25].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[26].atomic_number} symbol={data[26].symbol} name={data[26].name} atomicWeight={data[26].atomic_weight}
              /></div>


              <div className="square"><Element
                atomicNumb={data[27].atomic_number} symbol={data[27].symbol} name={data[27].name} atomicWeight={data[27].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[28].atomic_number} symbol={data[28].symbol} name={data[28].name} atomicWeight={data[28].atomic_weight}
              /></div>
              <div className="square"><Element
                atomicNumb={data[29].atomic_number} symbol={data[29].symbol} name={data[29].name} atomicWeight={data[29].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[30].atomic_number} symbol={data[30].symbol} name={data[30].name} atomicWeight={data[30].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[31].atomic_number} symbol={data[31].symbol} name={data[31].name} atomicWeight={data[31].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[32].atomic_number} symbol={data[32].symbol} name={data[32].name} atomicWeight={data[32].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[33].atomic_number} symbol={data[33].symbol} name={data[33].name} atomicWeight={data[33].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[34].atomic_number} symbol={data[34].symbol} name={data[34].name} atomicWeight={data[34].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[35].atomic_number} symbol={data[35].symbol} name={data[35].name} atomicWeight={data[35].atomic_weight}
              /></div>

              {/* row5 */}
              <div className="square"><Element 
                atomicNumb={data[36].atomic_number} symbol={data[36].symbol} name={data[36].name} atomicWeight={data[36].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[37].atomic_number} symbol={data[37].symbol} name={data[37].name} atomicWeight={data[37].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[38].atomic_number} symbol={data[38].symbol} name={data[38].name} atomicWeight={data[38].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[39].atomic_number} symbol={data[39].symbol} name={data[39].name} atomicWeight={data[39].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[40].atomic_number} symbol={data[40].symbol} name={data[40].name} atomicWeight={data[40].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[41].atomic_number} symbol={data[41].symbol} name={data[41].name} atomicWeight={data[41].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[42].atomic_number} symbol={data[42].symbol} name={data[42].name} atomicWeight={data[42].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[43].atomic_number} symbol={data[43].symbol} name={data[43].name} atomicWeight={data[43].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[44].atomic_number} symbol={data[44].symbol} name={data[44].name} atomicWeight={data[44].atomic_weight}
              /></div>


              <div className="square"><Element 
                atomicNumb={data[45].atomic_number} symbol={data[45].symbol} name={data[45].name} atomicWeight={data[45].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[46].atomic_number} symbol={data[46].symbol} name={data[46].name} atomicWeight={data[46].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[47].atomic_number} symbol={data[47].symbol} name={data[47].name} atomicWeight={data[47].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[48].atomic_number} symbol={data[48].symbol} name={data[48].name} atomicWeight={data[48].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[49].atomic_number} symbol={data[49].symbol} name={data[49].name} atomicWeight={data[49].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[50].atomic_number} symbol={data[50].symbol} name={data[50].name} atomicWeight={data[50].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[51].atomic_number} symbol={data[51].symbol} name={data[51].name} atomicWeight={data[51].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[52].atomic_number} symbol={data[52].symbol} name={data[52].name} atomicWeight={data[52].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[53].atomic_number} symbol={data[53].symbol} name={data[53].name} atomicWeight={data[53].atomic_weight}
              /></div>

              {/* row6 */}
              <div className="square"><Element 
                atomicNumb={data[54].atomic_number} symbol={data[54].symbol} name={data[54].name} atomicWeight={data[54].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[55].atomic_number} symbol={data[55].symbol} name={data[55].name} atomicWeight={data[55].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[56].atomic_number} symbol={data[56].symbol} name={data[56].name} atomicWeight={data[56].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[57].atomic_number} symbol={data[57].symbol} name={data[57].name} atomicWeight={data[57].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[58].atomic_number} symbol={data[58].symbol} name={data[58].name} atomicWeight={data[58].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[59].atomic_number} symbol={data[59].symbol} name={data[59].name} atomicWeight={data[59].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[60].atomic_number} symbol={data[60].symbol} name={data[60].name} atomicWeight={data[60].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[61].atomic_number} symbol={data[61].symbol} name={data[61].name} atomicWeight={data[61].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[62].atomic_number} symbol={data[62].symbol} name={data[62].name} atomicWeight={data[62].atomic_weight}
              /></div>


              <div className="square"><Element 
                atomicNumb={data[63].atomic_number} symbol={data[63].symbol} name={data[63].name} atomicWeight={data[63].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[64].atomic_number} symbol={data[64].symbol} name={data[64].name} atomicWeight={data[64].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[65].atomic_number} symbol={data[65].symbol} name={data[65].name} atomicWeight={data[65].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[66].atomic_number} symbol={data[66].symbol} name={data[66].name} atomicWeight={data[66].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[67].atomic_number} symbol={data[67].symbol} name={data[67].name} atomicWeight={data[67].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[68].atomic_number} symbol={data[68].symbol} name={data[68].name} atomicWeight={data[68].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[69].atomic_number} symbol={data[69].symbol} name={data[69].name} atomicWeight={data[69].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[70].atomic_number} symbol={data[70].symbol} name={data[70].name} atomicWeight={data[70].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[71].atomic_number} symbol={data[71].symbol} name={data[71].name} atomicWeight={data[71].atomic_weight}
              /></div>

              {/* row7 */}
              <div className="square"><Element 
                atomicNumb={data[72].atomic_number} symbol={data[72].symbol} name={data[72].name} atomicWeight={data[72].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[73].atomic_number} symbol={data[73].symbol} name={data[73].name} atomicWeight={data[73].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[74].atomic_number} symbol={data[74].symbol} name={data[74].name} atomicWeight={data[74].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[75].atomic_number} symbol={data[75].symbol} name={data[75].name} atomicWeight={data[75].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[76].atomic_number} symbol={data[76].symbol} name={data[76].name} atomicWeight={data[76].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[77].atomic_number} symbol={data[77].symbol} name={data[77].name} atomicWeight={data[77].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[78].atomic_number} symbol={data[78].symbol} name={data[78].name} atomicWeight={data[78].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[79].atomic_number} symbol={data[79].symbol} name={data[79].name} atomicWeight={data[79].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[80].atomic_number} symbol={data[80].symbol} name={data[80].name} atomicWeight={data[80].atomic_weight}
              /></div>


              <div className="square"><Element 
                atomicNumb={data[81].atomic_number} symbol={data[81].symbol} name={data[81].name} atomicWeight={data[81].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[82].atomic_number} symbol={data[82].symbol} name={data[82].name} atomicWeight={data[82].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[83].atomic_number} symbol={data[83].symbol} name={data[83].name} atomicWeight={data[83].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[84].atomic_number} symbol={data[84].symbol} name={data[84].name} atomicWeight={data[84].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[85].atomic_number} symbol={data[85].symbol} name={data[85].name} atomicWeight={data[85].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[86].atomic_number} symbol={data[86].symbol} name={data[86].name} atomicWeight={data[86].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[87].atomic_number} symbol={data[87].symbol} name={data[87].name} atomicWeight={data[87].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[88].atomic_number} symbol={data[88].symbol} name={data[88].name} atomicWeight={data[88].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[89].atomic_number} symbol={data[89].symbol} name={data[89].name} atomicWeight={data[89].atomic_weight}
              /></div>

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
              <div className="square"><Element 
                atomicNumb={data[90].atomic_number} symbol={data[90].symbol} name={data[90].name} atomicWeight={data[90].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[91].atomic_number} symbol={data[91].symbol} name={data[91].name} atomicWeight={data[91].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[92].atomic_number} symbol={data[92].symbol} name={data[92].name} atomicWeight={data[92].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[93].atomic_number} symbol={data[93].symbol} name={data[93].name} atomicWeight={data[93].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[94].atomic_number} symbol={data[94].symbol} name={data[94].name} atomicWeight={data[94].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[95].atomic_number} symbol={data[95].symbol} name={data[95].name} atomicWeight={data[95].atomic_weight}
              /></div>


              <div className="square"><Element 
                atomicNumb={data[96].atomic_number} symbol={data[96].symbol} name={data[96].name} atomicWeight={data[96].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[97].atomic_number} symbol={data[97].symbol} name={data[97].name} atomicWeight={data[97].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[98].atomic_number} symbol={data[98].symbol} name={data[98].name} atomicWeight={data[98].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[99].atomic_number} symbol={data[99].symbol} name={data[99].name} atomicWeight={data[99].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[100].atomic_number} symbol={data[100].symbol} name={data[100].name} atomicWeight={data[100].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[101].atomic_number} symbol={data[101].symbol} name={data[101].name} atomicWeight={data[101].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[102].atomic_number} symbol={data[102].symbol} name={data[102].name} atomicWeight={data[102].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[103].atomic_number} symbol={data[103].symbol} name={data[103].name} atomicWeight={data[103].atomic_weight}
              /></div>
              <div className="square"></div>

              {/*row 11*/}
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"><Element 
                atomicNumb={data[104].atomic_number} symbol={data[104].symbol} name={data[104].name} atomicWeight={data[104].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[105].atomic_number} symbol={data[105].symbol} name={data[105].name} atomicWeight={data[105].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[106].atomic_number} symbol={data[106].symbol} name={data[106].name} atomicWeight={data[106].atomic_weight}
              /></div>
              <div className="square"><Element 
                 atomicNumb={data[107].atomic_number} symbol={data[107].symbol} name={data[107].name} atomicWeight={data[107].atomic_weight}
              /></div>
              <div className="square"><Element 
                 atomicNumb={data[108].atomic_number} symbol={data[108].symbol} name={data[108].name} atomicWeight={data[108].atomic_weight}
              /></div>
              <div className="square"><Element 
                 atomicNumb={data[109].atomic_number} symbol={data[109].symbol} name={data[109].name} atomicWeight={data[109].atomic_weight}
              /></div>


              <div className="square"><Element 
                atomicNumb={data[110].atomic_number} symbol={data[110].symbol} name={data[110].name} atomicWeight={data[110].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[111].atomic_number} symbol={data[111].symbol} name={data[111].name} atomicWeight={data[111].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[112].atomic_number} symbol={data[112].symbol} name={data[112].name} atomicWeight={data[112].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[113].atomic_number} symbol={data[113].symbol} name={data[113].name} atomicWeight={data[113].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[114].atomic_number} symbol={data[114].symbol} name={data[114].name} atomicWeight={data[114].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[115].atomic_number} symbol={data[115].symbol} name={data[115].name} atomicWeight={data[115].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[116].atomic_number} symbol={data[116].symbol} name={data[116].name} atomicWeight={data[116].atomic_weight}
              /></div>
              <div className="square"><Element 
                atomicNumb={data[117].atomic_number} symbol={data[117].symbol} name={data[117].name} atomicWeight={data[117].atomic_weight}
              /></div>
              <div className="square"></div>

            </div>
          </div>

          <div className="footer">
            <p>footer</p>
          </div>

        </Fragment>

      ) : ' '}
    </Fragment>


  }
}

export default TableV2;