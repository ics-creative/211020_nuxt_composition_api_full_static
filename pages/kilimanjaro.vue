<template>
  <div>
    <MountainData :data="data" />
    <nuxt-link to="/" class="BackToHome">Back to Home</nuxt-link>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useAsync,
  useContext,
} from "@nuxtjs/composition-api";

const Kilimanjaro = defineComponent({
  setup() {
    const data = ref({});
    const { $http } = useContext();
    useAsync(async () => {
      console.log("useAsync");
      const result = await $http.$get(
        `https://api.nuxtjs.dev/mountains/mount-kilimanjaro`
      );
      data.value = result;
    });
    return { data };
  },
});
export default Kilimanjaro;
</script>

<style scoped></style>
