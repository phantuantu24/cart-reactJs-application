import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart/Cart'
import * as message from '../constants/Message'
import CartItem from '../components/CartItem/CartItem'
class CartContainer extends Component {

	showCartItem = (cart) => {
		var result = ''
		if (cart.length > 0) {
			return result = cart.map(cartItem => 
				<CartItem key={cartItem.id} cartItem={cartItem}/>
			)
		} else {
			return result = message.MSG_CART_EMPTY
		}
	}

	render() {
		const { cart } = this.props
		return (
			<div>
				<Cart>
					{ this.showCartItem(cart) }
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
	).isRequired
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, null)(CartContainer)
