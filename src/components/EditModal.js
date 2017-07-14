import React, { Component } from 'react';
import ReactModal from 'react-modal';

import styles from '../../style/edit-modal.scss'

const customStyles = {
  content: {
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const EDIT = "EDIT"
      , ADD = "ADD TO BAG"
      , IMAGE_URL = `../../assets/${this.props.productInfo.p_image}`;

export default class EditModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemTotalPrice: props.productInfo.p_originalprice,
      chosenColorName: props.productInfo.p_selected_color.name,
      chosenColorCode: props.productInfo.p_selected_color.hexcode,
      sizeValue: props.productInfo.p_selected_size.name,
      sizeCode: props.productInfo.p_selected_size.code,
      quantityValue: props.productInfo.p_quantity,
      buttonName: EDIT,
    }
  }

  handleChange(event) {
    event.preventDefault();
    if (this.state.buttonName === ADD) {
      this.props.closeModal(!this.props.openModal)
      return this.props.itemUpdate({
        newSize: this.state.sizeValue,
        newQuantity: this.state.quantityValue,
        newColor: this.state.chosenColorName
      })
    } else {
      this.setState({ buttonName: ADD })
    }
  }


  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.openModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="row item-name ">
                {`${this.props.productInfo.p_name}`}
              </div>
              <div className="row item-price">
                <span>$</span>
                <span className="price">{`${this.state.itemTotalPrice}`}</span>
              </div>
              <div className="row color-text">
                {`${this.state.chosenColorName.toUpperCase()}`}
              </div>
              <div className="row color-code">
                {((colorsArray) => {
                  return colorsArray.map((color) => {
                    const background = {
                      background: `${color.hexcode}`
                    }
                    return (
                      <span className="color-code-span" style={background} onClick={() => this.setState({ chosenColorName: color.name })}></span>
                    )
                  })
                })(this.props.productInfo.p_available_options.colors)}
              </div>

              <div className="row selections">
                <span className="select-options">
                  <select value={this.state.sizeValue} onChange={(event) => this.setState({ sizeValue: event.target.value })}>
                    <option value={this.state.sizeValue} selected> {this.state.sizeValue.toUpperCase()} </option>
                    {((sizeArray) => {
                      return sizeArray.map((size) => {
                        return (<option value={size.name}>{size.name.toUpperCase()}</option>)
                      })
                    })(this.props.productInfo.p_available_options.sizes)}
                  </select>
                </span>
                <span className="select-options">
                  <select value={this.state.quantityValue} onChange={(event) => this.setState({ quantityValue: event.target.value })}>
                    <option value={this.state.quantityValue} selected> {`QTY : ${this.state.quantityValue}`} </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              </div>

              <div className="row control-button">
                <button type="button"
                  className="control-button-size"
                  onClick={this.handleChange.bind(this)}
                  value={this.state.buttonName} >
                  {this.state.buttonName}
                </button>
              </div>
              <div className="row"></div>
            </div>
            <div className="col-md-6 col-sm-6 item-image-mobile">
              <img src={IMAGE_URL} alt="IMAGE" width="250px" height="270px" />
            </div>
          </div>
          <span className="close-modal" onClick={() => this.props.closeModal(!this.props.openModal)}>X</span>
        </ReactModal >
      </div>
    )
  }
}



