import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart/Cart'
import * as Message from '../constants/Message'
import CartItem from '../components/CartItem/CartItem'
import CartResult from '../components/CartResult/CartResult'
import * as Action from '../actions/index'
class CartContainer extends Component {

	showCartItem = (cart) => {
		var result = ''
		const { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props
		if (cart.length > 0) {
			return result = cart.map((cartItem, index) => 
				<CartItem 
					key={cartItem.product.id} 
					cartItem={cartItem}
					onDeleteProductInCart={onDeleteProductInCart}
					onChangeMessage={onChangeMessage}
					onUpdateProductInCart={onUpdateProductInCart}
				/>
			)
		} else {
			return result = <tr><th>{Message.MSG_CART_EMPTY}</th></tr>
		}
	}

	showTotalPrice = (cart) => {
		var result = null
		if (cart.length > 0) {
			return result = <CartResult cart={cart}/>
		}
	}

	render() {
		const { cart } = this.props
		return (
			<div>
				<Cart>
					{ this.showCartItem(cart) }
					{ this.showTotalPrice(cart) }
				</Cart>
			</div>
		)
	}
}

//Using PropsType to validate data
CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}).isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired,
	onDeleteProductInCart: PropTypes.func.isRequired,
	onChangeMessage: PropTypes.func.isRequired,
	onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteProductInCart: (productId) => {
			dispatch(Action.actRemoveProductInCart(productId))
		},
		onChangeMessage: (message) => {
			dispatch(Action.actChangeMessage(message))
		},
		onUpdateProductInCart: (productId, newQuantity) => {
			dispatch(Action.actUpdateProductInCart(productId, newQuantity))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
