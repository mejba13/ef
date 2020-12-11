<template>
  <div>
    <div id="content-wrapper" class="w-full max-w-screen-xl relative mx-auto px-6 pt-20 pb-40 md:pb-24">
      <div class="flex">

        <!-- content -->
        <div class="max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
          <product-block/>
        </div>

        <!-- sidebar -->
        <div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
          <div class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-16) pt-12 pb-4 -mt-12 top-16">
            <div class="mb-8">
              <Sidebar/>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import ProductBlock from '@/components/blocks/ProductBlock'
import Sidebar from '~/components/Sidebar.vue'

export default {
  name: 'Product',
  data() {
    return {
      //
    }
  },
  components: {
    Sidebar,
    ProductBlock
  },
  mounted() {
  },
  methods: {
    //
  },
};
</script>
