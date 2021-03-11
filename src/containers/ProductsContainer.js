import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem/ProductItem'
import ProductList from '../components/ProductList/ProductList'
import * as message from '../constants/Message'
import PropTypes from 'prop-types'
import { actAddToCart } from '../actions/index' 
export class ProductsContainer extends Component {

	showProductItem(products) {
		var { onAddToCart } = this.props
		if (products.length > 0) {
			return products.map(product => (
				<ProductItem
					key={product.id}
					product={product} 
					onAddToCart={onAddToCart}
				/>
			))
		} else {
			return (
				<h3>{message.MSG_PRODUCT_LIST_EMPTY}</h3>
			)
		}
	}

	render() {
		const { products } = this.props
		return (
			<div>
				<ProductList products={products}>
					{this.showProductItem(products)}
				</ProductList>
			</div>
		)
	}
}

//Using PropsType to validate data
ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = (state) => {
	return {
		products: state.products // propsName: state.reducerName
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			dispatch(actAddToCart(product, 1))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
