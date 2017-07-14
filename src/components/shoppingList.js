import React, { Component } from 'react'

import Header from './header';
import TableHeader from './tableHeader';
import ShoppingItem from './shoppingItem';
import CartTotal from './cartTotal';
import HelpSection from './helpSection';

export default class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: this.props.items.productsInCart
    }
  }

  removeProduct(productId) {
    let productIndex = this.state.productList.findIndex((product) => {
      return product.p_id === productId
    })
    this.state.productList.splice(productIndex, 1);
    this.setState({ productList: this.state.productList })
  }

  //in progress... not completed
  updateProduct(productId, productNewPrice) {
    console.log(productId, productNewPrice)
    let productPriceIndex = this.state.productList.findIndex((product) => {
      return product.p_id === productId
    })
    this.state.productList[productPriceIndex].p_originalprice = productNewPrice;
  }
  //in progress... not completed

  render() {
    let productList = this.state.productList;
    return (
      <div>
        <Header itemCount={productList.length}/>
        <TableHeader itemCount={productList.length}/>
        <div className="row">
          <div className="col-md-12">
            {((products) => {
              return products.map((product) => {
                return (
                  <div>
                    <ShoppingItem product={product} key={product.p_id} 
                    removeProduct={this.removeProduct.bind(this)}
                    updateProduct={this.updateProduct.bind(this)}  />
                  </div>
                )
              })
            }
            )(productList)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <HelpSection />
          </div>
          <div className="col-md-7">
            <CartTotal totalPrice={((productList) => {
                return productList.map((product) => {
                  return product.p_price
                })
              })(this.state.productList)} />
          </div>
        </div>
      </div>
    )
  }
}
