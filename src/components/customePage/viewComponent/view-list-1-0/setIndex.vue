<template>
  <div>
    <setCustomerViewComponent_list_1_0
      :form="form"
      @getDataList="getDataList"
    ></setCustomerViewComponent_list_1_0>
    <div v-if="dataList && dataList.length > 0">
      <div class="mb-20">
        <el-input
          type="textarea"
          :rows="2"
          autosize
          placeholder="请输入内容"
          v-model="form.requestObject['dataTemplate']"
        >
        </el-input>
      </div>
      <code-viewer v-if="code_example" ref="codeViewer" :source="code_example">
      </code-viewer>
    </div>
  </div>
</template>

<script>
import setGuideComponentProperty from "@/components/customePage/componentsIntercept/setComponent/setGuideComponentProperty";
import setCustomerViewComponent_list_1_0 from "@/components/customePage/viewComponent/intercept/setIndex";

export default {
  name: "setCustomerViewComponent-list-1-0",
  mixins: [setGuideComponentProperty],
  components: {
    setCustomerViewComponent_list_1_0,
  },
  props: {},
  data() {
    return {
      //测试数据
      dataList: [],
      code_example: null,
    };
  },

  created() {},
  methods: {
    getDataList(value) {
      this.dataList = value.dataList;
      this.code_example =
        ` 
<template>
  <div id="` +
        this.value.controlType +
        this.value.id +
        `">
  </div>
</template>
<script>
export default {
    data() {
      return {
        dataList: '` +
        JSON.stringify(this.dataList) +
        `',
        dataTemplate:` +
        JSON.stringify(this.form.requestObject.dataTemplate) +
        `,
        startTime: +new Date(),
      };
    },
    created() {
      this.jsonData()
    },
    methods: {
      jsonData(){
        this.dataList = eval(this.dataList);
        this.dataTemplate = eval(this.dataTemplate);
      }
    },
  };
<\/script>`;
    },
  },
};
</script>

<style scoped></style>
