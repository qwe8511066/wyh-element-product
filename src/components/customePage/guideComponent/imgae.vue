<template>
  <el-skeleton :loading="value.skeleton" :throttle="500" animated>
    <div class="" :style="[value.style]">
      <a
        v-if="value.link"
        :href="value.link"
        :target="value.target ? '_blank' : ''"
      >
      <imgaeDefault :value="value"></imgaeDefault>
      </a>
      <imgaeDefault v-else :value="value"></imgaeDefault>
    </div>
  </el-skeleton>
</template>
<script>
import guideComponentProperty from "./guideComponentProperty";
import imgaeDefault from './imgaeDefault'
export default {
  name: "customerPageImage",
  mixins: [guideComponentProperty],
  components:{
    imgaeDefault
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
    
  }
};
</script>

<style scoped></style>
