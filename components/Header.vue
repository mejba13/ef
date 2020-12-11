<template>
  <div id="header">

    <div class="flex justify-between bg-gray-800 border-b border-gray-200 fixed top-0 inset-x-0 z-30 h-16 items-center">
      <div class="w-full max-w-screen-xl relative mx-auto px-6">
        <div class="flex items-center -mx-6">

          <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div class="flex items-center">
              <NuxtLink :to="`/`">
                <img class="w-auto hidden md:block h-10" src="~/assets/img/logo.png">
                <img class="w-10 h-10 block md:hidden" src="https://nuxtjs.org/logos/nuxt-emoji.png">
              </NuxtLink>
            </div>
          </div>

          <div class="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
            <div class="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
              <div class="relative">
                <button
                  class="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-300 bg-gray-200">
                  Search product</span></button>
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                  <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20">
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <button type="button" id="sidebar-open"
                    class="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700"
                    aria-label="Open site navigation">
              <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <button type="button" id="sidebar-close"
                    class="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700 hidden"
                    aria-label="Close site navigation">
              <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
              </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
              <div class="relative mr-4">
                <!-- <form>
                  <label>
                    <span class="sr-only">Tailwind CSS Version</span>
                    <select class="appearance-none block bg-transparent pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none focus:text-gray-800">
                      <option value="v1">v1.7.0</option><option value="v0">v0.7.4</option>
                    </select>
                  </label>
                </form>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                </div> -->
              </div>

              <div class="flex justify-start items-center text-gray-500">

<!--                <a class="block flex items-center hover:text-gray-700 text-lg mr-5" href="#">-->
<!--                  <fa :icon="['fas', 'shopping-cart']"/>-->
<!--                </a>-->
                <NuxtLink :to="`/cart`">
                  <div class="flex flex-row cursor-pointer truncate p-2 px-4 rounded">
                    <div class="flex flex-row-reverse ml-2 w-full">
                      <div slot="icon" class="relative">
                        <div
                          class="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                          {{productsInCart}}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-shopping-cart w-6 h-6 mt-2">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </NuxtLink>

              </div>

            </div>
          </div>


        </div>
      </div>
    </div>


    <!--    <div class="fixed z-40 inset-0 overflow-y-auto">-->
    <!--      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">-->
    <!--        <div class="fixed inset-0 transition-opacity">-->
    <!--          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>-->
    <!--        </div>-->
    <!--        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;-->
    <!--        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">-->
    <!--          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">-->
    <!--            <div class="sm:flex sm:items-start">-->
    <!--              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">-->
    <!--                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
    <!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />-->
    <!--                </svg>-->
    <!--              </div>-->
    <!--              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">-->
    <!--                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">-->
    <!--                  Deactivate account-->
    <!--                </h3>-->
    <!--                <div class="mt-2">-->
    <!--                  <p class="text-sm leading-5 text-gray-500">-->
    <!--                    Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.-->
    <!--                  </p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">-->
    <!--            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">-->
    <!--              <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">-->
    <!--                Deactivate-->
    <!--              </button>-->
    <!--            </span>-->
    <!--            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">-->
    <!--              <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">-->
    <!--                Cancel-->
    <!--              </button>-->
    <!--            </span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


  </div>

</template>

<script>
export default {
  data() {
    return {
      //   var: null,
    }
  },
  computed: {
    inCart() {
      return this.$store.state.cart.inCart
    },
    productsInCart() {
      var total_products = 0
      for (let i = 0; i < this.inCart.length; i++) {
        total_products += this.inCart[i].quantity
      }
      return total_products
    }
  },
  mounted() {
  }
};
</script>
