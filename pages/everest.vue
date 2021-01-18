<template>
  <div>
    <MountainData v-if="data" :data="data" />
    <nuxt-link to="/" class="BackToHome">Back to Home</nuxt-link>
  </div>
</template>

<script>
import {
  defineComponent,
  useContext,
  useStatic,
  computed,
} from "@nuxtjs/composition-api";

const Everest = defineComponent({
  setup() {
    const param = computed(() => "everest");
    const { $http } = useContext();
    const data = useStatic(
      async (param, key) => {
        return await $http.$get(`https://api.nuxtjs.dev/mountains/${key}`);
      },
      param,
      "mount"
    );
    return { data };
  },
});
export default Everest;
</script>

<style scoped></style>
