<template>
  <div>
    <nuxt-link :to="{name: 'slug', params: { slug:product.ef_slug } }">
      <div class="pt-3">
        <img class="h-40 m-auto" :src="`${imageURL + product.product_image}`" alt="Phone">
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 text-center">
          {{ currencySign }}{{ product.static_prices['GBP']['price'] }}
        </p>
        <div class="font-bold text-base h-6">{{ product.title.substring(0, 40) + ".." }}</div>
      </div>
    </nuxt-link>

    <div class="px-6 pt-4 pb-2">
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="addToCart(product.id, product.title, product.static_prices['GBP']['price'], product.product_image)">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imageURL: process.env.EF_IMAGE_URL,
      currencySign: "£",
    }
  },
  methods: {
    addToCart(id, title, price, image) {
      const product = {id: id, title: title, price: price, quantity: 1, image: image};
      this.$store.dispatch('cart/addToCart', product);
    },
    removeFromCart(index) {
      this.$store.dispatch('cart/removeFromCart', index);
    }
  },
}
</script>
