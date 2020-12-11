<template>
  <div class="error-block">
    <h2>{{ error.message }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="css" scoped>
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
svg {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  opacity: 0.75;
}
h2 {
  font-size: 18px;
  text-align: center;
}
</style>
