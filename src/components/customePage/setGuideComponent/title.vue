<template>
  <div>
    <el-form-item label="标题内容" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="跳转链接">
      <el-input v-model="form.link"></el-input>
    </el-form-item>
    <el-form-item label="是否跳转外部链接" v-if="form.link">
      <el-switch v-model="form.target"></el-switch> 
      {{ form.target ? "是" : "否" }}
    </el-form-item>
  </div>
</template>

<script>
import eventEmiter from "@/utils/eventEmiter";
import setGuideComponentProperty from "./setGuideComponentProperty";
export default {
  name: "customerPageTitle",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    this.init();
  },
  methods: {
    //该组件的属性初始化 向父级发送信息  让父级去做对象的合并
    init() {
      eventEmiter.emit("setGuideComponentPropertyInitForm", [
        { 
          rules: {
            title: [{ required: true, message: "这是必填项" }]
          }
        }
      ]);
    },
    outPutForm() {}
  }
};
</script>

<style scoped></style>
