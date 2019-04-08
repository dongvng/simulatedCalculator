import React from 'react'
import './result.css'
import { connect } from 'react-redux' 

class Result extends React.Component{
  render(){
    const {result, firstValue, secondValue, isEqual} = this.props;
    var display;
    // if(secondValue === 0 && !isEqual){
    //   display = firstValue;
    // }
    if(firstValue !== 0 && !isEqual ){
      display = secondValue;
    }
    if(isEqual){
      display = result;
    }
    return (
      <div className="result">
        <div className="value">{display ? display : firstValue}</div>
      </div>
    )
  }
} 
//display.toString().length >= 7 ? parseFloat(display.toString().slice(0,7)) : display 

function mapState(state){
  const {result, firstValue, secondValue, isEqual, calType} = state
  return {result, firstValue, secondValue, isEqual, calType}
}

export default connect(mapState)(Result);