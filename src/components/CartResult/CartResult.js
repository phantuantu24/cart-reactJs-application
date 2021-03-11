import React, { Component } from 'react';
import './CartResult.css';

class CartResult extends Component {

  showTotalPrice = (cart) => {
    var totalPrice = 0
    var result = []
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].product.price * cart[i].quantity  
      }
    }
    return totalPrice
  }

  calculateTotalPrice = (price, quantity) => {
    return price * quantity
  }

  render() {
    const { cart } = this.props
    console.log("Cart Result: ", cart)
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Total</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{ this.showTotalPrice(cart) }$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;