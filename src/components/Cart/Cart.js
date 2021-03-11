import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    const { children } = this.props
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { children }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;