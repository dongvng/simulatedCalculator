import React, { Component } from 'react'
import './submainRight.css'

import plus from "../../resources/icon/plus-solid.svg"
import minus from "../../resources/icon/minus-solid.svg"
import divide from "../../resources/icon/divide-solid.svg"
import equals from "../../resources/icon/equals-solid.svg"
import times from "../../resources/icon/times-solid.svg"

import ButtonRight from './button/buttonRight'

export default class SubmainRight extends Component {
  render(){
    return (
			<div className="submainRight">
        <ButtonRight icon={divide} alt="divide" />
        <ButtonRight icon={times} alt="multiply" />
        <ButtonRight icon={minus} alt="minus" />
        <ButtonRight icon={plus} alt="plus" />
        <ButtonRight icon={equals} alt="result" />
      </div>
    )
  }
}


