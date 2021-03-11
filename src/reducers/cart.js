import * as types from '../constants/ActionType'

const data = JSON.parse(localStorage.getItem('CART'))
const initialStae = [
	{
		product: {
			id: 1,
			name: 'Iphone 7 Plus',
			image: 'https://media3.scdn.vn/img2/2017/12_10/lTn2hE_simg_de2fe0_500x500_maxb.jpg',
			description: 'Apple Production',
			price: 500,
			inventory: 10,
			rating: 4
		},
		quantity: 5
	}
]

const cart = (state = initialStae, action) => {
	switch (action.type) {
		case types.ADD_TO_CART:
			console.log(action)
			return [...state]
		default:
			return [...state]
	}
}

export default cart