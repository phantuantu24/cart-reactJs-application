import * as types from '../constants/ActionType'

const data = JSON.parse(localStorage.getItem('CART'))
const initialStae = data ? data : []

const cart = (state = initialStae, action) => {
	const { product, quantity } = action //product and quantity is given by action
	var index = -1 //TO check not found product in state
	switch (action.type) {
		case types.ADD_TO_CART:
			console.log(action)
			index = findIndexInCart(state, product)
			if (index !== -1) {
				// state[index].quantity += quantity
				state[index] = {
					...state[index],
					quantity: state[index].quantity += quantity
				}
			} else {
				state.push({
					product,
					quantity
				})
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		default:
			return [...state]
	}
}

const findIndexInCart = (cart, product) => {
	var index = -1
	cart.forEach((item, i) => {
		if (item.product.id === product.id) {
			index = i
		}
	});
	return index
}

export default cart