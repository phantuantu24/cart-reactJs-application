const initialState = [
	{
		id: 1,
		name: 'Iphone 7 Plus',
		image: 'https://media3.scdn.vn/img2/2017/12_10/lTn2hE_simg_de2fe0_500x500_maxb.jpg',
		description: 'Apple Production',
		price: 500,
		inventory: 10,
		rating: 4
	},
	{
		id: 2,
		name: 'Samsung Note 8',
		image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/01/samsung-galaxy-note-8-gold.jpg',
		description: 'Samsung Production',
		price: 400,
		inventory: 15,
		rating: 3
	},
	{
		id: 3,
		name: 'Oppo F1s',
		image: 'https://images-na.ssl-images-amazon.com/images/I/41UFVnYtHrL.jpg',
		description: 'Oppo Production',
		price: 450,
		inventory: 5,
		rating: 5
	}
]

const products = (state = initialState, action) => {
	switch (action.type) {
		default:
			return [...state]
	}
}

export default products