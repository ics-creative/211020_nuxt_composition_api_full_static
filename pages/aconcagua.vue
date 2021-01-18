<template>
  <div>
    <MountainData v-if="data" :data="data" />
    <nuxt-link to="/" class="BackToHome">Back to Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Aconcagua",
  async asyncData({ $http }) {
    console.log("asyncData");
    const result = await $http.$get(
      `https://api.nuxtjs.dev/mountains/aconcagua`
    );
    return { data: result };
  },
};
</script>

<style scoped></style>
