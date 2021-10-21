<template>
  <div>
    <el-form-item label="栅格宽度" prop="title">
      <div class="flex">
        <el-slider
          class="flex-1 px-20"
          :min="0"
          :max="12"
          v-model="form.styleClass['rowWidth']"
          show-input
        ></el-slider>
      </div>
    </el-form-item>
    <el-form-item label="自定义类名">
      <el-input v-model="form.classes"></el-input>
    </el-form-item>
  </div>
</template>

<script>
import eventEmiter from "@/utils/eventEmiter";
import setGuideComponentProperty from "./setGuideComponentProperty";
export default {
  name: "setGuideRowComponent",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {
      styleSpacingModel: this.$style.styleSpacingModel
    };
  },
  computed: {},
  created() {},
  methods: {
    //该组件的属性初始化 向父级发送信息  让父级去做对象的合并
    init() { 
    }
  }
};
</script>

<style scoped></style>
