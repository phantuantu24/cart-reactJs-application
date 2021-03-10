import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList/ProductList'

export class ProductsContainer extends Component {
	render() {
		const { products } = this.props
		return (
			<div>
				<ProductList products={products}/>
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
