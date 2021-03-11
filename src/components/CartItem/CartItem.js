import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {

  showTotalPriceOfEachProduct = (price, quantity) => {
    return quantity * price
  }
  
  render() {
    const { cartItem } = this.props

    console.log(cartItem)
    return (
      <tr>
        <th scope="row">
          <img src={cartItem.product.image}
            alt={cartItem.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{cartItem.product.name}s</strong>
          </h5>
        </td>
        <td>{cartItem.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cartItem.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{ this.showTotalPriceOfEachProduct(cartItem.product.price, cartItem.quantity) }$</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title="" data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;