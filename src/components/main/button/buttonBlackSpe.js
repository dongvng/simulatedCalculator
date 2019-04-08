import React,{Component} from 'react'
import {connect} from 'react-redux'
import '../submainLeft.css'

import {addNum0} from '../../../redux/actions/actions'

class ButtonBlackSpe extends Component{
	render(){
		const {number, addNum0} = this.props;
		return(
			<div className="blackBtnSpeCover">
				<button className="blackBtnSpe" onClick={() => addNum0()}>
					{number}
				</button>
			</div>
		)
	}
}
export default connect(null, {addNum0})(ButtonBlackSpe)