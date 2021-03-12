import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem/ProductItem'
import ProductList from '../components/ProductList/ProductList'
import * as message from '../constants/Message'
import PropTypes from 'prop-types'
import * as Action from '../actions/index' 
export class ProductsContainer extends Component {

	showProductItem(products) {
		var { onAddToCart, onChangeMessage } = this.props
		if (products.length > 0) {
			return products.map(product => (
				<ProductItem
					key={product.id}
					product={product} 
					onAddToCart={onAddToCart}
					onChangeMessage={onChangeMessage}
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
	).isRequired,
	onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		products: state.products // propsName: state.reducerName
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product) => {
			dispatch(Action.actAddToCart(product, 1))
		},
		onChangeMessage: (message) => {
			dispatch(Action.actChangeMessage(message))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
