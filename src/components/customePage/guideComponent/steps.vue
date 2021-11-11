<template>
  <el-steps :active="value.compontIndex" :direction="value.compontPosition">
    <el-step
      :title="item.title"
      v-for="(item, index) in value.componentsList"
      :key="'stepsList' + index"
    >
      <template slot="description">
        <div v-html="item.value"></div>
      </template>
    </el-step>
  </el-steps>
</template>

<script>
import lodash from "lodash";
import guideComponentProperty from "./guideComponentProperty";
export default {
  name: "customerPageSteps",
  mixins: [guideComponentProperty],
  props: {},
  data() {
    return {
      activeNames: ""
    };
  },
  computed: {},
  created() {},
  methods: {
    outPutForm() {}
  }
};
</script>

<style scoped></style>
