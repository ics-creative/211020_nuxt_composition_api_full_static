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

const Mountains = defineComponent({
  setup() {
    const { $http, route } = useContext(); // @nuxt/httpモジュールを導入済みの場合useContext()から呼び出せます。
    /* 動的ルーティングの値を取得 */
    const param = computed(() => route.value.params.id);
    const keyBase = "fuga";
    const data = useStatic(
      async (param) => {
        /* 非同期処理の結果を必ずreturnする */
        return await $http.$get(`https://api.nuxtjs.dev/mountains/${param}`);
      },
      param,
      keyBase
    );
    return { data };
  },
});
export default Mountains;
</script>

<style scoped></style>
