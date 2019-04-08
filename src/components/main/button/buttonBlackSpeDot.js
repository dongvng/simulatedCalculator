import React,{Component} from 'react'
import {connect} from "react-redux"
import '../submainLeft.css'

import {addDOT} from '../../../redux/actions/actions'

class ButtonBlackSpeDot extends Component{
	render(){
		const {text, addDOT} = this.props;
		return(
			<div className="buttonBlackSpeDotCover">
				<button className="buttonBlackSpeDot" onClick={() => addDOT()}>
					{text}
				</button>
			</div>
		)
	}
}
export default connect(null, {addDOT})(ButtonBlackSpeDot);