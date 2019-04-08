import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../submainLeft.css'

import {addNum} from '../../../redux/actions/actions'

class ButtonBlack extends Component{
	render(){
		const {number, addNum} = this.props;
		return(
			<div className="blackBtnCover">
				<button className="blackBtn" onClick={() => addNum(number)}>
					{number}
				</button>
			</div>  
		)
	}
}
export default connect(null, {addNum})(ButtonBlack);