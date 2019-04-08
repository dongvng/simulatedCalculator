import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../submainLeft.css'

import {addCLEAR} from '../../../redux/actions/actions'

class ButtonSilverText extends Component{
	render(){
		const {firstValue, addCLEAR} = this.props;
		return(
			<div className="silverCover">
					<button className="silverBtn" onClick={() => addCLEAR()}>
						{firstValue === 0 ? "AC" : "C"}
					</button>
			</div>  
		)
	}
}
function mapState(state){
	const {firstValue} = state;
	return {firstValue}
}
export default connect(mapState, {addCLEAR})(ButtonSilverText);