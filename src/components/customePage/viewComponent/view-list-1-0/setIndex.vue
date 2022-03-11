<template>
  <div>
    <setCustomerViewComponent_list_1_0
      :form="form"
      @getDataList="getDataList"
    ></setCustomerViewComponent_list_1_0>
    <div v-if="dataList && dataList.length>0">
      <code-viewer ref="codeViewer" :showCode="true" :source="code_example">
      </code-viewer>
      <customerPageViewIntercept
        :dataList="dataList"
        :dataTemplate="dataTemplate"
      ></customerPageViewIntercept>
    </div>
  </div>
</template>

<script>
import setGuideComponentProperty from "@/components/customePage/componentsIntercept/setComponent/setGuideComponentProperty";
import setCustomerViewComponent_list_1_0 from "@/components/customePage/viewComponent/intercept/setIndex";
import customerPageViewIntercept from "@/components/customePage/viewComponent/intercept/index.vue";

export default {
  name: "setCustomerViewComponent-list-1-0",
  mixins: [setGuideComponentProperty],
  components: {
    setCustomerViewComponent_list_1_0,
    customerPageViewIntercept
  },
  props: {},
  data() {
    return {
      dataList: [],
      dataTemplate: `<div><div v-for="(item,index) in dataList" :key="index">
      {{ item.title }}
    </div>
    </div>
      `,
      code_example: ""
    };
  },

  created() {
  },
  methods: {
    getDataList(value){
      this.dataList = value.dataList;
      this.code_example =
      ` 
<template>
  <div id="` +
      this.value.controlType +
      this.value.id +
      `">
    <h1>Welcome to Vue.js !</h1> 
    <div v-html=dataTemplate></div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        dataList: '` +
      JSON.stringify(this.dataList) +
      `'
        dataTemplate:'` +
      JSON.stringify(this.dataTemplate) +
      `'
      };
    },
    created() {
      this.jsonData()
    },
    methods: {
      jsonData(){
        this.dataList = JSON.parse(this.dataList);
        this.dataTemplate = JSON.parse(this.dataTemplate);
      }
    },
  };
<\/script>`;
    }
  }
};
</script>

<style scoped></style>
