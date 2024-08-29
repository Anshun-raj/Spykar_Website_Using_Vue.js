const products = {
    state: {
        products: [
            {id: 1, name: 'Skinny Jeans', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteEEv25usuB5gABMLIgnjYWexgmjgE6lsaw&s', price: 'Rs:700/-'},
            {id: 2, name: 'Casual Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSkBgh9tF3f7HOQB1oDbc157dV1pOA6Ow1Q&s', price: 'Rs:600/-'},
            {id: 3, name: 'Perfumes', image: 'https://images-static.nykaa.com/media/catalog/product/f/1/f1e506cMGDACTAS001Blue_1.jpg?tr=cm-pad_resize,w-200,h-240', price: 'Rs:120/-'},
           
        ]
    },
    getters: {
        getProducts: (state) => {
            return state.products;
        }
    },
    mutations: {},
    actions: {},
  }
  export default products;