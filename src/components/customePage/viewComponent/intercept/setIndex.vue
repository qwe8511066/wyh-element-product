<template>
  <el-form
    ref="viewComponentForm"
    :rules="rules"
    :model="form.requestObject"
  >
    <el-form-item label="请选择分类" prop="requestType">
      <el-select
        el-select
        v-model="form.requestObject['requestType']"
        placeholder="请选择"
      >
        <el-option-group
          v-for="group in getViewList"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
      </el-select>
    </el-form-item>
    <el-form-item label="请输入页码" prop="pageSize">
      <el-input-number
        v-model="form.requestObject['pageSize']"
        :min="1"
        :max="20"
      ></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">测试数据</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import setGuideComponentProperty from "@/components/customePage/componentsIntercept/setComponent/setGuideComponentProperty";
export default {
  name: "setCustomerViewComponent-list-1-0",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {
      getViewList: this.$API.getViewList,
      rules: {
        requestType: [
          { required: true, message: "请选择分类", trigger: "blur" }
        ],
        pageSize: [{ required: true, message: "请输入页码", trigger: "blur" }]
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    onSubmit() {
      this.$refs["viewComponentForm"].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.$http.post('/getNewList1',{
            pageSize:this.form.requestObject.pageSize
          }).then(data => {
            const {list} = data.data;
            this.$emit("getDataList", { dataList: list });
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped></style>
