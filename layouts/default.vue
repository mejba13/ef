<template>
  <div>
    <Header />
    <nuxt keep-alive />
<!--    <Footer />-->
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
// import Footer from '~/components/Footer.vue'

export default {
  data() {
    return {
      // var: null,
    }
  },
  components: {
    Header
  },
  mounted() {
    // console.log(this.$route.params.slug);
  }
};
</script>

<style>
html, body {
  font-family: 'Roboto', sans-serif;
}
</style>
