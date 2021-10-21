<template>
  <div>
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
export default {
  name: "customerPageUeditor",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {};
  },
  components: {
    tinymce,
  },
  created() {
     
  },
  methods: {
  }
};
</script>

<style scoped></style>
