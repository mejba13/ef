<template>
  <div class="w-full max-w-screen-xl relative mx-auto px-6 pt-20 pb-40 md:pb-24">

    <div v-if="$fetchState.pending">
      <img src="~/assets/img/loader-ripple.svg" class="m-auto object-center" style="max-width: 120px" alt="Loader">
    </div>
    <div v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error"/>
    </div>
    <div v-else>

      <!-- Trending Products -->
      <h4 class="font-bold text-xl">Trending Products</h4>
      <hr class="my-4 border-b-1 border-gray-200">

      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        <product-card-block
          v-for="(product, i) in products_trending"
          :key="product.id"
          :product="product"
          class="max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-gray-200"
        />
      </div>

    </div>
  </div>
</template>

<script>
import ProductCardBlock from '@/components/blocks/ProductCardBlock'
import InlineErrorBlock from '@/components/blocks/InlineErrorBlock'

export default {
  name: 'Index',
  components: {
    ProductCardBlock,
    InlineErrorBlock
  },
  async fetch() {
    this.$axios.setHeader('Authorization', process.env.API_KEY)
    const category_data = await this.$axios.$post(
      process.env.EF_API_URL + 'category/35'
    )
    this.products_trending = category_data.products
  },
  head() {
    return {
      title: "Mini Site -EF",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mini site of EF'
        }
      ]
    }
  },
  data() {
    return {
      products_trending: {},
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 mins ago
    if (this.$fetchState.timestamp <= Date.now() - 300000) {
      this.$fetch()
    }
  },
}
</script>
