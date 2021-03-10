import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem/ProductItem'
import ProductList from '../components/ProductList/ProductList'
export class ProductsContainer extends Component {

	showProductItem(products) {
		if (products.length > 0) {
			return products.map(product => (
				<ProductItem 
					key={product.id}
					product={product}/>
			))
		} else {
			return (
				<h3>Product List is empty</h3>
			)
		}
	}

	render() {
		const { products } = this.props
		return (
			<div>
				<ProductList products={products}>
					{ this.showProductItem(products) }
				</ProductList>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products // propsName: state.reducerName
	}
}

// const mapDispatchToProps

export default connect(mapStateToProps, null)(ProductsContainer)
