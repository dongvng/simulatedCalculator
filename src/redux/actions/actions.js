export const NUM0 = "0"
export const addNum0 = () =>({
  type: NUM0
})

export const NUM = "number"
export const addNum = (numPress) =>({
  type: NUM,
  num: numPress
})

export const DOT = "."
export const addDOT = () =>({
  type: DOT,
  sign: 'dot'
})

export const CLEAR = "C"
export const addCLEAR = () =>({
  type: CLEAR,
  sign: 'clear'
})

export const NEGA_PERCEN = "-/%"
export const addNegaPercen = (opeInput) => ({
  type: NEGA_PERCEN,
  operType: opeInput
})

export const OPERATORS = "operators"
export const addCalType = (calType) =>({
  type: OPERATORS,
  opeType: calType
})


