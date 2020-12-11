// import VuexPersistence from 'vuex-persist'
// export const plugins = [VuexPersistence]

export const state = () => ({
  inCart: []
})

export const mutations = {
  ADD_TO_CART(state, product) {

    let product_id = product.id;

    // search in cart
    var exist = state.inCart.find(product => product.id === product_id);

    // product already in cart?
    if(typeof exist !== 'undefined') {
      // update quantity
      var productIndex = state.inCart.findIndex((product => product.id === product_id));
      var productQuantity = state.inCart[productIndex].quantity

      state.inCart[productIndex].quantity = productQuantity + 1;
    }
    else {
      // add to cart
      state.inCart.push(product);
    }
  },
  REMOVE_FROM_CART(state, index) {
    state.inCart.splice(index, 1);
  },
}

export const actions = {
  addToCart(context, product) {
    context.commit('ADD_TO_CART', product);
  },
  removeFromCart(context, index) {
    context.commit('REMOVE_FROM_CART', index);
  },
}

export const getters = {
  inCart: state => state.inCart,
}
