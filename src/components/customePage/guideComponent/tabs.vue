<template>
  <el-tabs v-model="activeNames" :tab-position="value.compontPosition">
    <el-tab-pane
      :label="item.title"
      :name="String(index)"
      v-for="(item, index) in value.componentsList"
      :key="'tabsList' + index"
    >
      <div v-html="item.value"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import lodash from "lodash";
import guideComponentProperty from "./guideComponentProperty";
export default {
  name: "customerPageTabs",
  mixins: [guideComponentProperty],
  props: {},
  data() {
    return {
      activeNames: ""
    };
  },
  computed: {},
  created() {
    this.activeNames = String(this.value.compontIndex);
  },
  methods: {
    outPutForm() {}
  }
};
</script>

<style scoped></style>
