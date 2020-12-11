<template>
  <div class="w-full max-w-screen-xl relative mx-auto px-6 pt-20 pb-40 md:pb-24">

    <h4 class="font-bold text-xl">Cart</h4>
    <hr class="my-4 border-b-1 border-gray-200">
    <table v-if="inCart.length !== 0" class="table-fixed">
      <thead>
      <tr>
        <th class="w-1/2 px-4 py-2">Product</th>
        <th class="w-1/4 px-4 py-2">Price</th>
        <th class="w-1/4 px-4 py-2">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in inCart">
        <td class="border px-4 py-2">
          <div class="flex flex-start">
            <div class="flex-none text-gray-700 hidden xl:block">
              <img class="h-16 m-auto" :src="`${imageURL + product.image}`">
            </div>
            <div class="flex-none text-gray-700 p-2">
              {{ product.title }}
            </div>
          </div>
        </td>
        <td class="border px-4 py-2">{{ product.price }} X {{ product.quantity }}</td>
        <td class="border px-4 py-2">
          <button
            class="bg-transparent hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            @click="removeFromCart(index)">
            Remove
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-else>Cart is empty!</div>

  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      imageURL: process.env.EF_IMAGE_URL,
      products_in_cart: null,
    }
  },
  computed: {
    inCart() {
      return this.$store.state.cart.inCart
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('cart/removeFromCart', index);
    }
  },
}
</script>

<style scoped>

</style>
