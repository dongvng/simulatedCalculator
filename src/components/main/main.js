import React, { Component } from 'react'
import './main.css'

import SubmainLeft from './submainLeft'
import SubmainRight from './submainRight'

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <SubmainLeft />
        <SubmainRight />
      </div>
    )
  }
}
