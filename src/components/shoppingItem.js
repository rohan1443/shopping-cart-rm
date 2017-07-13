import React, { Component } from 'react'

import styles from '../../style/shopping-item.scss';
import EditModal from './EditModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class ShoppingItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedColor: props.product.p_selected_color.name,
      selectedSize: props.product.p_selected_size.name,
      selectedSizeCode: props.product.p_selected_size.code,
      productQuantity: props.product.p_quantity,
      modalIsOpen: false,
      productPrice: props.product.p_originalprice,
      itemUpdate: {}
    }
  }

  openModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  closeModal(modalStatus) {
    this.setState({ modalIsOpen: modalStatus });
  }

  updatedItem(itemDetails) {
    console.log('itemDetails', itemDetails)
    this.setState({
      selectedColor: itemDetails.newColor,
      selectedSize: itemDetails.newSize,
      productQuantity: itemDetails.newQuantity,
      productPrice: ((price, qty) => price * qty)(this.props.product.p_originalprice, itemDetails.newQuantity)
    })
  }

  render() {
    const { product, removeProduct, updateProduct } = this.props;
    console.log(product)
    const IMAGE_URL = `../../assets/${this.props.product.p_image}`;

    return (
      <div className="shopping-item">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-6 item-image">
            <img src={IMAGE_URL} alt="Image" width="150px" height="150px" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-6">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12 product-description">
                <div className="row itemName">
                  {`${product.p_variation.toUpperCase()} ${product.p_name.toUpperCase()}`}
                </div>
                <div className="row itemStyle">
                  {`Style #: ${product.p_style}`}
                </div>
                <div className="row itemColor">
                  {`Colour: ${this.state.selectedColor}`}
                </div>
                <div className="row hidden-lg hidden-md hidden-sm itemSize ">
                  {`Size: ${this.state.selectedSize}`}
                </div>
              </div>

              <div className="col-md-2 col-sm-2 hidden-xs product-size">
                {(
                  (sizeName) => {
                    console.log(sizeName)
                    const sizeObj = product.p_available_options.sizes.find((sizeObj) => sizeObj.name === sizeName)

                    return sizeObj.code.toUpperCase()
                  }
                )(this.state.selectedSize)}
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 product-quantity">
                <div className="row">
                  <input type="text" className="input-qty" disabled value={this.state.productQuantity} />
                </div>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 product-price">
                <div className="row">
                  <input type="text" className="item-value" disabled value={`$ ${this.state.productPrice}`} onChange={this.props.updateProduct(this.props.product.p_id, this.state.productPrice)}/>
                </div>
              </div>
            </div>
            <div className="row hidden-xs editProduct">
              <ul className="nav nav-pills">
                <li onClick={this.openModal.bind(this)}>EDIT</li>
                <li>|</li>
                <li onClick={() => removeProduct(product.p_id)}>REMOVE</li>
                <li>|</li>
                <li>SAVE FOR LATER</li>
              </ul>
            </div>
          </div>
          <EditModal
            openModal={this.state.modalIsOpen}
            itemUpdate={this.updatedItem.bind(this)}
            closeModal={this.closeModal.bind(this)}
            productInfo={this.props.product}
          />
        </div>
        <div className="row hidden-lg hidden-md hidden-sm edit-product-mobile">
          <ul className="nav nav-pills">
            <li onClick={this.openModal}>EDIT</li>
            <li>|</li>
            <li onClick={() => removeProduct(product.p_id)}>REMOVE</li>
            <li>|</li>
            <li>SAVE FOR LATER</li>
          </ul>
        </div>
      </div>
    )
  }
}
