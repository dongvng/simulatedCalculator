import React, {Component} from 'react'
import '../submainRight.css'
import {connect} from 'react-redux'

import {addCalType} from '../../../redux/actions/actions'

class ButtonRight extends Component{
  constructor(props){
    super(props);
    this.addCal = this.addCal.bind(this);
  }
  addCal(){
    this.props.addCalType(this.props.alt);
  }
  render(){
    const {icon, alt} = this.props;
    return(
      <div className="orangeColor">
				<button className="orangeBtn" onClick={this.addCal}>
						<img src={icon} width={20} alt={alt}/>
				</button>
			</div>  
    )
  }
}
export default connect(null, {addCalType})(ButtonRight)