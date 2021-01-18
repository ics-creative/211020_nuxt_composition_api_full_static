<template>
  <div class="MountainData">
    <h1 class="title">{{ mountainData.title }}</h1>
    <img
      class="mountainImage"
      :src="mountainData.image"
      :alt="mountainData.title"
      width="300"
      height="200"
    />
    <p class="description">{{ mountainData.description }}</p>
    <p class="continent">Continent: {{ mountainData.continent }}</p>
  </div>
</template>

<script>
  import {defineComponent, computed, useAsync} from "@nuxtjs/composition-api";
const MountainData = defineComponent({
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const mountainData = computed(() => props.data);
    return { mountainData };
  },
});
export default MountainData;
</script>

<style scoped>
.title {
  margin-bottom: 16px;
  color: #445273;
}
.mountainImage {
  margin-bottom: 16px;
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
}
.description {
  line-height: 1.5;
  margin-bottom: 8px;
}
  .continent{
    margin-bottom: 16px;
  }
</style>
