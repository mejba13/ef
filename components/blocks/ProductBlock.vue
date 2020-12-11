<template>
  <div>
    <template v-if="$fetchState.pending">
      <img src="~/assets/img/loader-ripple.svg" class="m-auto object-center" style="max-width: 120px" alt="Loader">
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <div v-if="product !== null">
        <h4 class="font-bold text-xl">{{ product.title }}</h4>

        <div class="sm:flex-none md:flex mt-6 mb-6">

          <div class="flex-initial mr-2">
            <div class="">
              <img class="m-auto" :src="`${imageURL + product.product_image}`">
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-row bg-teal-500 hover:bg-teal-600">
              <div class="flex-none text-white text-center bg-teal-600 w-10 py-2">
                <fa :icon="['fas', 'calendar-alt']"/>
              </div>
              <div class="flex-none text-white px-4 py-2 text-sm">
                Platform: {{ product.platform }}
              </div>
            </div>

            <div class="flex flex-row bg-teal-500 hover:bg-teal-600 mt-2">
              <div class="flex-none text-white text-center bg-teal-600 w-10 py-2">
                <fa :icon="['fas', 'mobile']"/>
              </div>
              <div class="flex-none text-white px-4 py-2 text-sm">
                Region: {{ product.region }}
              </div>
            </div>

            <div class="flex flex-row bg-teal-500 hover:bg-teal-600 mt-2">
              <div class="flex-none text-white text-center bg-teal-600 w-10 py-2">
                <fa :icon="['fas', 'tablet-alt']"/>
              </div>
              <div class="flex-none text-white px-4 py-2 text-sm">
                Delivery: {{ product.delivery }}
              </div>
            </div>

            <div class="flex flex-row bg-teal-500 hover:bg-teal-600 mt-2">
              <div class="flex-none text-white text-center bg-teal-600 w-10 py-2">
                <fa :icon="['fas', 'camera']"/>
              </div>
              <div class="flex-none text-white px-4 py-2 text-sm">
                Availability:
                <span v-if="product.status === 0">Out of Stock</span>
                <span v-else-if="product.status === 1">In Stock</span>
                <span v-else-if="product.status === 2">Pre-Order</span>
              </div>
            </div>

            <div v-if="product.important_message != null"
                 class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-4 text-sm" role="alert">
              <p>{{ product.important_message }}</p>
            </div>

            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-10 pt-3 pb-3 pr-2 pl-2"
              @click="addToCart(product.id, product.title, product.static_prices['GBP']['price'], product.product_image)">
              Add to Cart
            </button>

          </div>

        </div>

        <!-- youtube -->
        <div class="video-container">
          <iframe :src="product.video_url" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>

        <!-- tabs -->
        <ul class="flex border-b mt-6 mb-6">
          <li class="mr-1" v-bind:class="[showSpecifications ? '-mb-px ' : '']">
            <a v-on:click="specifications"
               v-bind:class="[showSpecifications ? 'border-l border-t border-r rounded-t' : '']"
               class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold hover:text-blue-800" href="#">Specifications</a>
          </li>
          <li class="mr-1" v-bind:class="[showInformation ? '-mb-px ' : '']">
            <a v-on:click="information"
               v-bind:class="[showInformation ? 'border-l border-t border-r rounded-t' : '']"
               class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold hover:text-blue-800" href="#">Information</a>
          </li>
        </ul>

        <!-- specifications -->
        <div v-if="showSpecifications">
          <p style="display: none">{{ decodeHTMLEntities(product.description) }}</p>
        </div>

        <!-- information -->
        <div v-if="showInformation">
          <p>{{ product.system_requirements }}</p>
        </div>

        <!-- schema -->
        <script type="application/ld+json">
          {
            "@context": "http://schema.org/",
            "@type": "Product",
            "sku": "{{ this.productID }}",
            "image": "{{ imageURL }}",
            "name": "{{ this.product.title }}",
            "url": "http://localhost:3000/call-of-duty-modern-warfare-2019-ps4-uk",
            "description": "ssss",
            "brand": {
              "@type": "Thing",
              "name": "{{ this.product.title }}"
            },
            "offers": {
              "@type": "Offer",
              "availability": "http://schema.org/InStock",
              "priceCurrency": "GBP",
              "price": "29.00"
            }
          }
        </script>

      </div>
    </template>
  </div>
</template>

<script>
import InlineErrorBlock from '@/components/blocks/InlineErrorBlock'
import {ContentLoader } from 'vue-content-loader'

export default {
  components: {
    InlineErrorBlock,
  },
  props: [],
  async fetch() {
    this.$axios.setHeader('Authorization', process.env.API_KEY)

    const product = await this.$axios.$post(
      process.env.EF_API_URL + 'product/slug/' + this.$route.params.slug
    )

    if (product.ef_slug === this.$route.params.slug) {
      this.product = product
    } else {
      // set status code on server
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      throw new Error('Product not found')
    }
  },
  data() {
    return {
      imageURL: process.env.EF_IMAGE_URL,
      product: {},
      productID: null,

      showSpecifications: true,
      showInformation: false,
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 minutes ago
    if (this.$fetchState.timestamp <= Date.now() - 300000) {
      this.$fetch()
    }
  },
  head() {
    return {
      title: this.product.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Buy ' + this.product.title + ' at cheap price'
        }
      ]
    }
  },
  methods: {
    specifications() {
      this.showInformation = false
      this.showSpecifications = true
    },

    information() {
      this.showSpecifications = false
      this.showInformation = true
    },
    addToCart(id, title, price, image) {
      const product = {id: id, title: title, price: price, quantity: 1, image: image};
      this.$store.dispatch('cart/addToCart', product);
    },
    removeFromCart(index) {
      this.$store.dispatch('cart/removeFromCart', index);
    },
    // decode HTML Entities
    decodeHTMLEntities(text) {
      var entities = [
        ['amp', '&'],
        ['+', ' '],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"'],
        ['#8216', "'"],
        ['#8217', "'"],
        ['hellip', "..."],
        ['#8211', "-"],
        ['#038', "&"],
        ['#8220', '"'],
        ['#8221', '"'],
      ];

      for (var i = 0, max = entities.length; i < max; ++i)
        text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

      return text;
    },
  },
}
</script>

<style>
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
