import React, { Component } from 'react';
import './ProductList.css';

class ProductList extends Component {
  render() {
    const { products } = this.props
    return (
      <section className="section">
        <h1 className="section-heading">Product List</h1>
        <div className="row">
          { this.props.children }
        </div>
      </section>
    );
  }
}

export default ProductList;