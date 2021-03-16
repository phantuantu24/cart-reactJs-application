import * as Types from '../constants/ActionType'

const data = JSON.parse(localStorage.getItem('CART'))
const initialStae = data ? data : []

const cart = (state = initialStae, action) => {
	const { product, quantity, newInventory } = action //product and quantity is given by action
	var index = -1 //TO check not found product in state
	switch (action.type) {
		case Types.ADD_TO_CART:
			console.log(action)
			index = findIndexInCart(state, product)
			if (index !== -1) {
				const inventoryValue = state[index].product.inventory
				if (inventoryValue > 0) {
					state[index] = {
						...state[index],
						quantity: state[index].quantity += quantity
					}
					state[index].product.inventory -= newInventory
				}		
			} else {
				state.push({
					product,
					quantity
				})
				index = findIndexInCart(state, product)
				state[index].product.inventory -= newInventory
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		case Types.DELETE_PRODUCT_IN_CART:
			index = findIdInCart(state, action.productId)
			if (index !== -1) {
				state.splice(index, 1)
			}
			localStorage.setItem('CART', JSON.stringify(state))
			return [...state]
		case Types.UPDATE_PRODUCT_IN_CART:
			index = findIdInCart(state, action.productId)
			if (index !== -1) {
				state[index].quantity = action.newQuantity
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

const findIdInCart = (cart, productId) => {
	var index = -1
	cart.forEach((item, i) => {
		if (item.product.id === productId) {
			index = i
		}
	});
	return index
}

export default cart