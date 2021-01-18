<template>
  <div>
    <MountainData :data="data" />
    <p>
      <button @click="$fetch">Fetch</button>
    </p>
    <nuxt-link to="/" class="BackToHome">Back to Home</nuxt-link>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  ref,
  useContext,
} from "@nuxtjs/composition-api";

const Denali = defineComponent({
  setup() {
    const data = ref({});
    const { $http } = useContext();
    useFetch(async () => {
      console.log("useFetch");
      const result = await $http.$get(
        `https://api.nuxtjs.dev/mountains/denali`
      );
      data.value = result;
    });
    return { data };
  },
});
export default Denali;
</script>

<style scoped>
a {
  display: block;
  margin-top: 24px;
}
</style>
