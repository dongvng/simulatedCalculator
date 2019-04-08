import * as actionsImport from '../actions/actions'

const initialState={
  firstValue: 0,
  secondValue: 0,
  result: 0,
  isEqual: false,
  isNegative: false,
  calType: ""
}

export default function(state = initialState, action){
  switch(action.type){
    case actionsImport.NUM0: 
      if(state.firstValue === 0 ){
        return state;
      }
      if(state.firstValue !== 0 && !state.calType){
        var firstVal;
        if(parseFloat(state.firstValue + "0") === 0){firstVal = state.firstValue + "0"}
        if(parseFloat(state.firstValue + "0") !== 0){firstVal = parseFloat(state.firstValue + "0")}
        return {...state, firstValue: firstVal};
      }
      if(state.secondValue === 0){
        return state
      }
      if(state.firstValue && state.secondValue !== 0 && state.calType){
        var secondVal;
        if(parseFloat(state.secondValue + "0") === 0){secondVal = state.secondValue + "0"}
        if(parseFloat(state.secondValue + "0") !== 0){secondVal = parseFloat(state.secondValue + "0")}
        return {...state, secondValue: secondVal}
      }
      break;
    case actionsImport.NUM:{
      var number = action.num;
      if(number === "1") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "1"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "1"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "1"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "1"), isEqual: false};
      }
      if(number === "2") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "2"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "2"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "2"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "2"), isEqual: false};
      }
      if(number === "3") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "3"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "3"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "3"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "3"), isEqual: false};
      }
      if(number === "4") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "4"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "4"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "4"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "4"), isEqual: false};
      }
      if(number === "5") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "5"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "5"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "5"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "5"), isEqual: false};
      }
      if(number === "6") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "6"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "6"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "6"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "6"), isEqual: false};
      }
      if(number === "7") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "7"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "7"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "7"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "7"), isEqual: false};
      }
      if(number === "8") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "8"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "8"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "8"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "8"), isEqual: false};
      }
      if(number === "9") {
        if(!state.calType && !state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "9"), isEqual: false};
        if(!state.calType && state.isNegative) return {...state, firstValue: parseFloat(state.firstValue + "9"), isEqual: false};
        if(state.calType && !state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "9"), isEqual: false};
        if(state.calType && state.isNegative) return {...state, secondValue: parseFloat(state.secondValue + "9"), isEqual: false};
      }
      break;
    }
    case actionsImport.DOT:
      if(!state.calType) return {...state, firstValue: state.firstValue + "."};
      if(state.calType) return {...state, secondValue: state.secondValue + "."};
      break;
    case actionsImport.CLEAR:
      if(state.firstValue || state.result || state.secondValue || state.calType){
        return {...state, firstValue: 0, secondValue: 0, calType: "", result: 0, isEqual: false, isNegative: false};
      }
      return state;
    
    case actionsImport.NEGA_PERCEN:
      var typeOfOpe = action.operType;
      if(typeOfOpe === "plusminus"){
        if(state.firstValue === 0 && !state.calType && !state.isNegative){
          return {...state, firstValue: "-0", isNegative : !state.isNegative};
        }
        if(state.secondValue === 0 && state.calType && !state.isNegative){
          return {...state, secondValue: "-0", isNegative: !state.isNegative};
        }
        if(state.firstValue !== 0 && !state.calType && !state.isNegative ){
          return {...state, isNegative: !state.isNegative, firstValue: state.firstValue * -1};
        }
        if(state.firstValue !== 0 && !state.calType && state.isNegative ){
          return {...state, isNegative: !state.isNegative, firstValue: state.firstValue * -1};
        }

        if(state.secondValue !== 0 && state.calType && !state.isNegative ){
          return {...state, isNegative: !state.isNegative, secondValue: state.secondValue * -1};
        }
        if(state.secondValue !== 0 && state.calType && state.isNegative ){
          return {...state, isNegative: !state.isNegative, secondValue: state.secondValue * -1};
        }
      }
      if(typeOfOpe === "percentage"){  
        if(state.firstValue === 0) return state;
        if(state.firstValue !== 0 && !state.calType) return {...state, firstValue: state.firstValue / 100};
        if(state.secondValue !== 0 && state.calType) return {...state, secondValue: state.secondValue / 100};
        if(state.secondValue === 0) return state;       
      }
      break;
    case actionsImport.OPERATORS:
      var operationType = action.opeType;
      if(operationType === "divide") return{...state, calType: "devide", secondValue:0, isNegative : false}
      if(operationType === "multiply") return{...state, calType: "times", secondValue:0, isNegative : false}
      if(operationType === "plus") return {...state, calType: "plus", secondValue:0, isNegative : false}
      if(operationType === "minus") return {...state, calType: "minus", secondValue:0, isNegative : false}
      if(operationType === "result"){
        if(state.calType === "plus"){
          return {...state, firstValue: state.firstValue + state.secondValue, result: parseFloat(state.firstValue + state.secondValue), isEqual: true};
        }
        if(state.calType === "minus"){
          return {...state, firstValue: state.firstValue - state.secondValue, result: parseFloat(state.firstValue - state.secondValue), isEqual: true};
        }
        if(state.calType === "times"){
          return {...state, firstValue: state.firstValue * state.secondValue, result: parseFloat(state.firstValue * state.secondValue), isEqual: true};
        }
        if(state.calType === "devide"){
          return {...state, firstValue: state.firstValue / state.secondValue, result: parseFloat(state.firstValue / state.secondValue), isEqual: true};
        }
      }
      break;
    default : 
      return state
  }
}