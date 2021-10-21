<template>
  <div>
    <el-form-item label="图片" prop="url">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <!-- <el-form-item label="线上图片">
      <el-input v-model="form.lineUrl"></el-input>
    </el-form-item> -->
    <el-form-item label="宽度">
      <div class="flex">
        <el-slider 
        v-if="form.styleClass['imgWidthModel']!='default'"
          class="flex-1 px-20"
          :min="form.styleClass['imgWidthModel'] === 'grid'?1:0"
          :step="form.styleClass['imgWidthModel'] === 'grid' ? 1 : 5"
          :max="form.styleClass['imgWidthModel'] === 'grid' ? 12 : 1000"
          v-model="form.styleClass['imgWidth']"
          show-input
        ></el-slider>
      <div class="">
        <el-radio-group v-model="form.styleClass['imgWidthModel']">
          <el-radio-button
            :label="item.value"
            v-for="(item, index) in styleSpacingModel"
            :key="index"
            >{{ item.label }}</el-radio-button>
             <el-radio-button
            label="default"
            >默认</el-radio-button
          >
        </el-radio-group>
      </div>
      </div>
    </el-form-item>
    <el-form-item label="跳转链接">
      <el-input v-model="form.link"></el-input>
    </el-form-item>
    <el-form-item label="是否跳转外部链接" v-if="form.link">
      <el-switch v-model="form.target"></el-switch>
      {{ form.target ? "是" : "否" }}
    </el-form-item>

    <el-form-item label="图片方向"> 
      <el-radio-group v-model="form.styleClass['blockAlign']">
        <el-radio-button
          :label="item.value"
          v-for="(item, index) in blockAlign"
          :key="'blockAlign'+index"
          >{{ item.label }}</el-radio-button
        >
      </el-radio-group> 
    </el-form-item>
  </div>
</template>

<script>
import eventEmiter from "@/utils/eventEmiter";
import setGuideComponentProperty from "./setGuideComponentProperty";
export default {
  name: "customerPageImage",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {
      styleSpacingModel: this.$style.styleSpacingModel,
      blockAlign: this.$style.blockAlign,
    };
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
          form: {
            styleClass: {
              imgWidthModel:this.form.styleClass.imgWidthModel?this.form.styleClass.imgWidthModel:'default',
            },
            url:'/img/img.bd84350b.jpg',
          },
          rules: {
            // title: [{ required: true, message: "这是必填项" }]
          }
        }
      ]);
    },
    outPutForm() {}
  }
};
</script>

<style scoped></style>
