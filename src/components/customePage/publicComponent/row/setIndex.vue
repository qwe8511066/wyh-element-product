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
      <el-collapse-item title="col水平间隔">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in spaceXList"
          :key="'spaceXList' + index"
        >
          <el-slider
            class="flex-1 px-20"
            :min="-1"
            :max="100"
            v-model="form.styleClass[item.fieldName]"
            show-input
          ></el-slider>
        </el-form-item>
      </el-collapse-item>

      <el-collapse-item title="col垂直间距">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in spaceYList"
          :key="'spaceYList' + index"
        >
          <el-slider
            class="flex-1 px-20"
            :min="-1"
            :max="100"
            v-model="form.styleClass[item.fieldName]"
            show-input
          ></el-slider>
        </el-form-item>
      </el-collapse-item>

      <el-collapse-item title="col方向">
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

      <el-collapse-item title="col换行(设计模式下不允许换行,因为屏幕过小)">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in flexWrapList"
          :key="'flexWrapList' + index"
        >
          <el-radio-group v-model="form.styleClass[item.fieldName]">
            <el-radio-button
              :label="box.value"
              v-for="(box, index) in styleFlexWrap"
              :key="'flexWrap' + 'flexWrapList' + index"
              >{{ box.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
      </el-collapse-item>

      <el-collapse-item title="col纵轴对齐">
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

      <el-collapse-item title="col横轴对齐">
        <el-form-item
          :label="item.title"
          v-for="(item, index) in alignItemsList"
          :key="'alignItemsList' + index"
        >
          <el-radio-group v-model="form.styleClass[item.fieldName]">
            <el-radio-button
              :label="box.value"
              v-for="(box, index) in styleFlexAlignContent"
              :key="'styleFlexAlignContent' + 'alignItemsList' + index"
              >{{ box.label }}</el-radio-button
            >
          </el-radio-group>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import setGuideComponentProperty from "@/components/customePage/componentsIntercept/setComponent/setGuideComponentProperty";
export default {
  name: "setGuideRowComponent",
  mixins: [setGuideComponentProperty],
  props: {},
  data() {
    return {
      styleFlexDirection: this.$style.styleFlexDirection,
      styleJustifyContent: this.$style.styleJustifyContent,
      styleFlexAlignContent: this.$style.styleFlexAlignContent,
      styleFlexWrap: this.$style.styleFlexWrap,
      flexDirectionList: [
        {
          title: "col方向",
          fieldName: "mobileFlexDirection"
        },
        {
          title: "md模式下的col方向(screens->md)",
          fieldName: "mdFlexDirection"
        },
        {
          title: "电脑pc模式下的col方向(screens->xl)",
          fieldName: "desktopFlexDirection"
        }
      ],

      flexWrapList: [
        {
          title: "col换行",
          fieldName: "mobileFlexWrap"
        },
        {
          title: "md模式下的col换行(screens->md)",
          fieldName: "mdFlexWrap"
        },
        {
          title: "电脑pc模式下的col换行(screens->xl)",
          fieldName: "desktopFlexWrap"
        }
      ],

      spaceYList: [
        {
          title: "col垂直间隔",
          fieldName: "mobileSpaceY"
        },
        {
          title: "md模式下的col垂直间隔(screens->md)",
          fieldName: "mdSpaceY"
        },
        {
          title: "电脑pc模式下的col垂直间隔(screens->xl)",
          fieldName: "desktopSpaceY"
        }
      ],

      spaceXList: [
        {
          title: "col水平间隔",
          fieldName: "mobileSpaceX"
        },
        {
          title: "md模式下的col水平间隔(screens->md)",
          fieldName: "mdSpaceX"
        },
        {
          title: "电脑pc模式下的col水平间隔(screens->xl)",
          fieldName: "desktopSpaceX"
        }
      ],

      justifyContentList: [
        {
          title: "col对齐方式",
          fieldName: "mobileJustifyContent"
        },
        {
          title: "md模式下的col对齐方式(screens->md)",
          fieldName: "mdJustifyContent"
        },
        {
          title: "电脑pc模式下的col对齐方式(screens->xl)",
          fieldName: "desktopJustifyContent"
        }
      ],

      alignItemsList: [
        {
          title: "col对齐方式",
          fieldName: "mobileItemsContent"
        },
        {
          title: "md模式下的col对齐方式(screens->md)",
          fieldName: "mdItemsContent"
        },
        {
          title: "电脑pc模式下的col对齐方式(screens->xl)",
          fieldName: "desktopItemsContent"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped></style>
