import React, { Component } from 'react';
import styles from '../../style/cart-style.scss';

export default class CartTotal extends Component {
  constructor(props) {
    super(props)

    this.state={
      promotionCode: "",
      buttonText: "APPLY"
    }
  }

  render() {
    //${this.props.totalPrice.reduce((total, num) => total + num)}
    console.log("ItemsPrice",this.props.totalPrice)

    let totalValue = this.props.totalPrice.reduce((a,b) => a+b)

    return (
      <div>
        <div className="row promotional">
          <div className="col-md-7 col-xs-6">ENTER PROMOTION CODE OR GIFT CARD</div>
          <div className="col-md-5 col-xs-6">
            <input type="text" placeholder="promotion" value={this.state.promotionCode} 
            onChange={(event) => this.setState({promotionCode: event.target.value})}/>
            <span>
              <button type="button" value={this.state.buttonText}> {this.state.buttonText} </button>
            </span>
          </div>
        </div>
        <div className="row pricing">
          <div className="col-md-8">SUB TOTAL</div>
          <div className="col-md-4">{`$ ${totalValue.toFixed(2)}`}</div>
        </div>
        <div className="row pricing">
          <div className="col-md-8">Promotion Code</div>
          <div className="col-md-4"> </div>
        </div>
        <div className="row pricing">
          <div className="col-md-8">Estimated Shipping</div>
          <div className="col-md-4">Free</div>
        </div>
      </div>
    )
  }
}