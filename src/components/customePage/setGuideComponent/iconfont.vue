<template>
  <div>
     <el-form-item label="font-family" prop="fontFamily">
      <el-input v-model="form.fontFamily"></el-input>
    </el-form-item>
    <el-form-item label="font-class" prop="fontClass">
      <el-input v-model="form.fontClass"></el-input>
    </el-form-item>
    <tinymce
      v-model="form.value"
      menubar="false"
      :height="360"
    />
   <!-- <el-form-item label="正则转换(&nbsp;)">
       <el-input v-model="form.egular"></el-input> 
    </el-form-item>-->
  </div>
</template>

<script>
import tinymce from '@/components/Tinymce/index'
import setGuideComponentProperty from "./setGuideComponentProperty";
import eventEmiter from "@/utils/eventEmiter";
export default {
  name: "customerPageIconfont",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {};
  },
  components: {
    tinymce,
  },
  created() {
     this.init()
  },
  methods: {
    init() {
      eventEmiter.emit("setGuideComponentPropertyInitForm", [
        {
          form: {
            fontFamily: this.form.fontFamily?this.form.fontFamily:'icon',
            fontClass:'',
          },
          rules: {
            fontFamily: [{ required: true, message: "这是必填项" }],
            fontClass: [{ required: true, message: "这是必填项" }],
          }
        }
      ]);
    },
  }
};
</script>

<style scoped></style>
