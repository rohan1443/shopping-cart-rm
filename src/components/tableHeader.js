import React, { Component } from 'react';

import styles from '../../style/table-header.scss'

export default class TableHeader extends Component {
  render() {
    return (
      <div className="row hidden-xs table-header">
        <div className="col-md-12">
          <div className="col-md-3 col-sm-3 ">
            {`${this.props.itemCount} ITEMS`}
            </div>
          <div className="col-md-9 col-sm-9">
            <div className="col-md-6 col-sm-6">
            </div>
            <div className="col-md-2 col-sm-2">
              SIZE
            </div>
            <div className="col-md-2 col-sm-2">
              QTY
            </div>
            <div className="col-md-2 col-sm-2">
              PRICE
            </div>
          </div>
        </div>
      </div>
    );
  }
}
