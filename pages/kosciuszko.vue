<template>
  <div>
    <MountainData v-if="data" :data="data" />
    <p>
      <button @click="$fetch">ReFetch</button>
    </p>
    <nuxt-link to="/" class="BackToHome">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Kosciuszko",
  data() {
    return {
      data: {},
    };
  },
  async fetch() {
    console.log("Fetch");
    this.data = await this.$http.$get(
      `https://api.nuxtjs.dev/mountains/mount-kosciuszko`
    );
  },
};
</script>

<style scoped>
a {
  display: block;
  margin-top: 24px;
}
</style>
