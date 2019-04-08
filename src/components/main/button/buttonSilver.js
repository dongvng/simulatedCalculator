import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../submainLeft.css'

import {addNegaPercen} from '../../../redux/actions/actions'

class ButtonSilver extends Component{
	constructor(props){
		super(props);
		this.NegaOrPer = this.NegaOrPer.bind(this);
	}
	NegaOrPer(){
		this.props.addNegaPercen(this.props.alt);
	}
	render(){
		const {icon, alt} = this.props;
		return(
			<div className="silverCover">
					<button className="silverBtn" onClick={this.NegaOrPer}>
						<img src={icon} width={20} alt={alt}/>
					</button>
			</div>  
		)
	}
}
export default connect(null, {addNegaPercen})(ButtonSilver);