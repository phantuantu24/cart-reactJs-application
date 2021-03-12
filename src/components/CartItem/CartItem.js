import React, { Component, useState } from 'react';
import './CartItem.css';
import * as Message from '../../constants/Message'

class CartItem extends Component {

  showTotalPriceOfEachProduct = (price, quantity) => {
    return quantity * price
  }

  deleteItem = (productId) => {
    this.props.onDeleteProductInCart(productId)
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_FROM_CART_SUCCESS)
  }

  onUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      this.props.onUpdateProductInCart(productId, newQuantity)
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }
  }
  
  render() {
    const { cartItem } = this.props
    // const { quatity } = cartItem.quantity > 0 ? cartItem : this.state
    return (
      <tr>
        <th scope="row">
          <img src={cartItem.product.image}
            alt={cartItem.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{cartItem.product.name}</strong>
          </h5>
        </td>
        <td>{cartItem.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cartItem.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() => this.onUpdateQuantity(cartItem.product.id, cartItem.quantity - 1)} 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label 
              onClick={() => this.onUpdateQuantity(cartItem.product.id, cartItem.quantity + 1)} 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{ this.showTotalPriceOfEachProduct(cartItem.product.price, cartItem.quantity) }$</td>
        <td>
          <button type="button" 
            className="btn btn-sm btn-primary waves-effect waves-light" 
            data-toggle="tooltip" 
            data-placement="top"
            title="" 
            data-original-title="Remove item"
            onClick={() => this.deleteItem(cartItem.product.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;