import React, { Component } from 'react'

import styles from '../../style/header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="row header" >
      <div className="col-md-12 col-xs-8">
        Your Shopping Bag
      </div>
      <div className="hidden-lg hidden-md hidden-sm col-xs-4">
        {`${this.props.itemCount} ITEMS`}
      </div>
      </div>
    )
  }
}