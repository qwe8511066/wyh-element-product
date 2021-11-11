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

    <el-collapse accordion>
      <el-collapse-item title="方向">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in flexDirectionList"
          :key="'flexDirectionList' + index"
        >
          <el-radio-group v-model="form.styleClass[item.fieldName]">
            <el-radio-button
              :label="box.value"
              v-for="(box, index) in styleFlexDirection"
              :key="'flexDirection' + 'flexDirectionList' + index"
              >{{ box.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
      </el-collapse-item>

      <el-collapse-item title="定位">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in justifyContentList"
          :key="'justifyContentList' + index"
        >
          <el-radio-group v-model="form.styleClass[item.fieldName]">
            <el-radio-button
              :label="box.value"
              v-for="(box, index) in styleJustifyContent"
              :key="'styleJustifyContent' + 'justifyContentList' + index"
              >{{ box.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
      </el-collapse-item>

      <el-collapse-item title="排列">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in alignContenttList"
          :key="'alignContenttList' + index"
        >
          <el-radio-group v-model="form.styleClass[item.fieldName]">
            <el-radio-button
              :label="box.value"
              v-for="(box, index) in styleFlexAlignContent"
              :key="'styleFlexAlignContent' + 'alignContenttList' + index"
              >{{ box.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
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
      styleFlexDirection: this.$style.styleFlexDirection,
      styleJustifyContent: this.$style.styleJustifyContent,
      styleFlexAlignContent: this.$style.styleFlexAlignContent,
      flexDirectionList: [
        {
          title: "col方向",
          fieldName: "mobileFlexDirection"
        },
        {
          title: "pad模式下的col方向(screens->lg)",
          fieldName: "ipadFlexDirection"
        },
        {
          title: "电脑pc模式下的col方向(screens->xl)",
          fieldName: "desktopFlexDirection"
        }
      ],
      justifyContentList: [
        {
          title: "col定位",
          fieldName: "mobileJustifyContent"
        },
        {
          title: "pad模式下的col定位(screens->lg)",
          fieldName: "ipadJustifyContent"
        },
        {
          title: "电脑pc模式下的col定位(screens->xl)",
          fieldName: "desktopJustifyContent"
        }
      ],

      alignContenttList: [
        {
          title: "col对齐方式",
          fieldName: "mobileAlignContent"
        },
        {
          title: "pad模式下的col对齐方式(screens->lg)",
          fieldName: "ipadAlignContent"
        },
        {
          title: "电脑pc模式下的col对齐方式(screens->xl)",
          fieldName: "desktopAlignContent"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
    //该组件的属性初始化 向父级发送信息  让父级去做对象的合并
    init() {}
  }
};
</script>

<style scoped></style>
