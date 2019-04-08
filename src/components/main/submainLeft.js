import React, { Component } from 'react'
import './submainLeft.css'

import percentage from '../../resources/icon/percentage-solid.svg'
import plusminus from '../../resources/icon/plusminus.png'
import ButtonSilver from './button/buttonSilver'
import ButtonSilverText from './button/buttonSilverText'
import ButtonBlack from './button/buttonBlack' 
import ButtonBlackSpe from './button/buttonBlackSpe'
import ButtonBlackSpeDot from './button/buttonBlackSpeDot'

export default class SubmainLeft extends Component {
  render() {
    return (
      <div className="submainLeft">
				<GroupSilver />
				<GroupBlack />
      </div>
    )
  }
}
class GroupSilver extends Component{
	render(){
		return(
			<div className="groupSilver">
				<ButtonSilverText />
				<ButtonSilver icon={plusminus} alt="plusminus" />
				<ButtonSilver icon={percentage} alt="percentage"/>
			</div>
		)
	}
}
class GroupBlack extends Component{
	render(){
		return(
			<div className="groupBlack">
				<div className="groupRowNor">
					<ButtonBlack number="7" />
					<ButtonBlack number="8"/>
					<ButtonBlack number="9"/>
				</div>
				<div className="groupRowNor">
					<ButtonBlack number="4"/>
					<ButtonBlack number="5"/>
					<ButtonBlack number="6"/>
				</div>
				<div className="groupRowNor">
					<ButtonBlack number="1"/>
					<ButtonBlack number="2"/>
					<ButtonBlack number="3"/>
				</div>
				<div className="groupRowSpe">
					<ButtonBlackSpe number="0" />
					<ButtonBlackSpeDot text="." />
				</div>
			</div>
		)
	}
}





