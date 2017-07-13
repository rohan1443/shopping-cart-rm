import React, { Component } from 'react';

import CartJson from '../../assets/cart';

import ShoppingList from './shoppingList';

export default class App extends Component {
  render() {
    
    return (
      <div>
        <ShoppingList items={CartJson} />
      </div>
    );
  }
}
