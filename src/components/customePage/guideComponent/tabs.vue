<template>
  <el-tabs v-model="activeNames" :tab-position="value.compontPosition">
    <el-tab-pane
      :label="item.title"
      :name="String(index)"
      v-for="(item, index) in value.componentsList"
      :key="'tabsList' + index"
    >
      <div v-for="(box, i) in item.children" :key="'tabsListChildren' + i">
        <guideComponent
          :class="[cobyGuideComponentStyleClass(box)]"
          :value="box"
          ref="tabsListChildrenGuideComponent"
        ></guideComponent>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import guideComponentProperty from "./guideComponentProperty";
import guideComponent from "./index";
import { guideComponentStyleClass } from "@/utils";
export default {
  name: "customerPageTabs",
  mixins: [guideComponentProperty],
  components: {
    guideComponent
  },
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
    outPutForm() {},
    cobyGuideComponentStyleClass(value) {
      return guideComponentStyleClass(value);
    }
  }
};
</script>

<style scoped></style>
