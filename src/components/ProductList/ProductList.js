import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';
import { connect } from 'react-redux'

class ProductList extends Component {
  render() {
    const { products } = this.props
    return (
      <section className="section">
        <h1 className="section-heading">Product List</h1>
        <div className="row">
          {
            products.length ? products.map(product => (
              <ProductItem 
                key={product.id}
                product={product} />
            )) : <h3>Product List is Empty</h3>
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products // propsName: state.reducerName
  }
}

// const mapDispatchToProps

export default connect(mapStateToProps, null)(ProductList);