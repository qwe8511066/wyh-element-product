<template>
  <el-drawer
    title="请选择布局"
    :visible.sync="layoutVisible"
    custom-class="layout-drawer"
  >
    <div
      @click="addPageLayout(index)"
      v-for="(item, index) in layoutArray"
      :class="[{ 'border-b-1': index != layoutArray.length - 1 }]"
      class="flex p-20 place-items-center cursor-pointer hover|bg-light hover|text-white"
      :key="index"
    >
      <div class="w-200 space-x-10 flex ">
        <div
          v-for="(box, i) in layoutArray[index]"
          :key="i"
          class="h-40 flex-1 bg-secondary"
        ></div>
      </div>
      <div class="flex-1 pl-20">col {{ layoutArray[index] }}</div>
    </div>
  </el-drawer>
</template>

<script>
import { isCol } from "@/utils/index";
import eventEmiter from "@/utils/eventEmiter";
import { uuid } from "vue-uuid";
import lodash from "lodash";
export default {
  //设置布局
  name: "addLayout",
  data() {
    return {
      layoutList: [],
      layoutVisible: false,
      layoutArray: [1, 2, 3, 4, 6],
      dataIndex: -1
    };
  },
  created() {
    this.init();
    eventEmiter.on("addLayout", value => {
      const { index, status } = value;
      this.layoutVisible = status;
      this.dataIndex = index;
    });
  },
  methods: {
    init() {
      for (let index = 0; index < this.layoutArray.length; index++) {
        let col = [];
        const desktopType = 12 / this.layoutArray[index];
        for (let i = 0; i < this.layoutArray[index]; i++) {
          col.push({
            classes: "",
            colList: [],
            controlType: "col",
            styleClass: {
              desktopWidthModel: "grid",
              desktopWidth: desktopType,
              ipadWidthModel: "grid",
              ipadWidth: desktopType,
              mobileWidthModel: "grid",
              mobileWidth: 12,
              mobileColFlex: "",
              ipadColFlex: "",
              desktopColFlex: ""
            },
            animation: {}
          });
        }
        this.layoutList.push({
          container: {
            controlType: "container",
            classes: "",
            //对应的类型：
            //container、container-lg、container-md、container-sm、container-xs
            type: "container",
            animation: {}
          },
          row: {
            controlType: "row",
            classes: "",
            styleClass: {
              rowWidthModel: "grid",
              rowWidth: 12,
              mobileFlexDirection: "flex-col",
              ipadFlexDirection: "flex-row",
              desktopFlexDirection: "flex-row",
              mobileJustifyContent: "justify-start",
              ipadJustifyContent: "justify-start",
              desktopJustifyContent: "justify-start",
              mobileAlignContent: "content-start",
              ipadAlignContent: "content-start",
              desktopAlignContent: "content-start"
            },
            animation: {}
          },
          col: col
        });
      }
    },
    addPageLayout(index) {
      this.layoutList[index].col.forEach(element => {
        element.id = uuid.v4();
      });
      eventEmiter.emit("addPageLayout", [
        {
          value: lodash.cloneDeep(this.layoutList[index]),
          index: this.dataIndex
        }
      ]);
      this.layoutVisible = false;
    }
  }
};
</script>

<style></style>
