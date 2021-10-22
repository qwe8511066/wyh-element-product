<template>
  <div>
    <div class="" :class="[{ 'md|space-y-30': layout }]">
      <div class="mb-20" v-if="layout">
        <el-button @click="addLayout(true)">
          添加布局
        </el-button>
      </div>

      <div v-for="(item, index) in data" :key="'container' + index">
        <div
          class="relative"
          v-aos-animation:{value}="item.container.animation"
          :class="[
            item.container.type,
            item.container.classes,
            guideComponentStyleClass(item.container),
            {
              'layout-container': layout
            }
          ]"
        >
          <div
            class="row flex m-auto justify-start relative"
            v-aos-animation:{value}="item.row.animation"
            :class="[
              item.row.classes,
              guideComponentStyleClass(item.row),
              {
                'space-y-20 md|space-y-0 md|space-x-20 layout-row pt-40': layout,
                'flex-wrap': !layout
              }
            ]"
          >
            <div
              v-for="(col, i) in item.col"
              class="relative col"
              :key="'col' + i"
              @click="clickRow(item, col, $event)"
              v-aos-animation:{value}="col.animation"
              :class="[
                col.classes,
                guideComponentStyleClass(col),
                {
                  'md|space-y-20 layout-col py-40 px-30 border-blue-700 border-2 border-dashed relative ': layout
                }
              ]"
            >
              <draggable
                handle=".el-icon-s-unfold"
                v-bind="dragOptions"
                class="dragArea list-group"
                :list="col.colList"
                :id="col.id"
                :clone="cloneDog"
                @end="onEndClone"
              >
                <div
                  v-for="(box, index_1) in col.colList"
                  :key="'component' + index_1"
                  :class="[
                    box.class,
                    {
                      'mt-20': index_1 != 0 && layout,
                      'space-y-20 layout-col-component py-40 px-30 border-blue-400 border-2 border-dashed relative ': layout
                    }
                  ]"
                >
                  <guideComponent
                    v-aos-animation:{value}="box.animation"
                    :class="[guideComponentStyleClass(box)]"
                    :layout="layout"
                    :value="box"
                    ref="guideComponent"
                  ></guideComponent>

                  <!-- 设置ColComponent start -->
                  <div
                    v-if="layout"
                    style="margin-top:0px"
                    class="set-attributes-col-component hidden place-items-center absolute top-5 left-5 space-x-10"
                  >
                    <span>{{ box.controlType }}</span>
                    <i
                      class="el-icon-s-tools text-lg cursor-pointer"
                      @click="setColComponent(box, index_1, col)"
                    ></i>
                    <i
                      class="el-icon-close text-lg cursor-pointer"
                      @click="
                        deleteContainerRow(
                          col,
                          index_1,
                          'component',
                          '删除组件',
                          '是否删除该组件'
                        )
                      "
                    ></i>
                    <i class="el-icon-s-unfold text-lg cursor-pointer"></i>
                  </div>

                  <!-- 设置ColComponent end -->
                </div>
              </draggable>
              <!-- 设置Col start -->
              <div
                class="set-attributes-col hidden place-items-center absolute top-0 left-2 space-x-10"
              >
                <span>col {{ i + 1 }}</span>
                <i
                  class="el-icon-s-tools text-lg cursor-pointer"
                  @click="setContainerRowTools(item, 'col', i, 4)"
                ></i>
                <i
                  class="el-icon-close text-lg cursor-pointer"
                  @click="
                    deleteContainerRow(
                      item,
                      i,
                      'col',
                      '清空Col',
                      '是否清空该Col'
                    )
                  "
                ></i>
              </div>
              <!-- 设置Col end -->

              <div :class="[{ 'pt-30': layout }]" v-if="layout">
                <el-button
                  type="primary"
                  class="w-full"
                  @click="addComponet(true, col)"
                  plain
                  >添加组件</el-button
                >
              </div>
            </div>

            <!-- 设置Row start -->
            <div
              class="set-attributes-row hidden place-items-center absolute top-0 right-0 space-x-10"
            >
              <span>row</span>
              <i
                class="el-icon-s-tools text-lg cursor-pointer"
                @click="setContainerRowTools(item, 'row', index, 3)"
              ></i>
              <i
                class="el-icon-close text-lg cursor-pointer"
                @click="
                  deleteContainerRow(
                    item,
                    index,
                    'row',
                    '清空Row',
                    '是否清空该Row'
                  )
                "
              ></i>
            </div>
            <!-- 设置Row end -->
          </div>

          <!-- 设置Container start -->

          <div
            class="set-attributes-container hidden place-items-center absolute  top-0  left-0 space-x-10"
          >
            <span>container</span>
            <span>{{ index + 1 }}</span>
            <i
              class="el-icon-s-tools text-lg cursor-pointer"
              @click="setContainerRowTools(item, 'container', index, 2)"
            ></i>
            <i
              class="el-icon-close text-lg cursor-pointer"
              @click="
                deleteContainerRow(
                  item,
                  index,
                  'container',
                  '删除Container',
                  '是否删除第' + (index + 1) + '个Container?'
                )
              "
            ></i>
          </div>

          <!-- 设置Container end -->
        </div>
        <div class="mt-20" v-if="layout">
          <el-button @click="addLayout(true)">
            添加布局
          </el-button>
        </div>
      </div>
    </div>
    <!-- 设置布局 -->
    <addLayout v-if="layout"></addLayout>
    <!-- 设置布局 -->

    <!-- 删除Container或清空Row -->
    <el-drawer
      :title="deleteEmptyVisible.title"
      :visible.sync="deleteEmptyVisible.visible"
      :wrapperClosable="false"
    >
      <div class="h-full flex-col flex">
        <div class="flex p-20 text-2xl flex-grow  justify-center items-center">
          {{ deleteEmptyVisible.text }}
        </div>
        <div class="flex p-20">
          <el-button @click="deleteEmptyVisible.visible = false" class="w-full"
            >取 消</el-button
          >
          <el-button type="primary" class="w-full" @click="determineDelete"
            >确 定</el-button
          >
        </div>
      </div>
    </el-drawer>
    <!-- 删除Container或清空Row -->

    <!-- 添加组件 -->
    <el-drawer
      v-if="layout"
      title="请选择组件"
      :visible.sync="addComponeVisible"
      custom-class="layout-drawer"
    >
      <div class="px-10">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            :title="item.title"
            :name="String(index)"
            :key="index"
            v-for="(item, index) in componentList"
          >
            <div
              :key="i"
              v-for="(box, i) in item.list"
              @click="addPageColComponent(box)"
              :class="[{ 'border-b-1': i != item.list.length - 1 }]"
              class="flex p-20 place-items-center cursor-pointer hover|bg-light hover|text-white"
            >
              <div class="flex-1 pl-20">
                {{ box.title }}
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-drawer>
    <!-- 添加组件 -->

    <!-- 设置组件 -->
    <el-dialog
      width="80%"
      :close-on-click-modal="false"
      v-if="layout"
      :title="setComponeVisibleTitle"
      :visible.sync="setComponeVisible"
      v-dialogDrag
      :destroy-on-close="true"
      custom-class="myDialog"
    >
      <setGuidePublicComponent
        ref="setGuidePublicComponent"
        v-if="setComponeVisible"
        :value="col.component"
      ></setGuidePublicComponent>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setComponeVisible = false">取 消</el-button>
        <el-button type="primary" @click="setGuidePublicComponentFinish"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 设置组件 -->
  </div>
</template>

<script>
import eventEmiter from "@/utils/eventEmiter";
import lodash from "lodash";
import draggable from "vuedraggable";
import addLayout from "./addLayout/index";
import guideComponent from "./guideComponent/index";
import setGuidePublicComponent from "./setGuideComponent/public";
import { uuid } from "vue-uuid";
import { checkArray, checkArrayString, judgeStyleClass } from "@/utils";
export default {
  name: "customePage",
  components: {
    addLayout,
    guideComponent,
    draggable,
    setGuidePublicComponent
  },
  directives: {
    "aos-animation": {
      bind(el, binding, vnode, oldVnode) {
        vnode.context.setAttributeAos(el, binding.value);
      },
      update(el, binding, vnode, oldVnode) {
        vnode.context.setAttributeAos(el, binding.value);
      }
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  data() {
    return {
      styleFontSize: this.$style.styleFontSize,
      componentList: this.$style.componentList,
      pcFieldName: this.$style.pcFieldName,
      ipadFieldName: this.$style.ipadFieldName,

      deleteEmptyVisible: {
        title: "",
        visible: false,
        text: "",
        index: "",
        value: "",
        fieldName: ""
      },

      col: {
        index: "",
        list: [],
        // 0新增col  1修改col
        status: 0,
        component: ""
      },
      containerValue: "",

      addComponeVisible: false,
      setComponeVisible: false,
      setComponeVisibleTitle: "",
      activeName: "0",
      dragCloneCol: ""
    };
  },
  props: {
    //从父级获取的表单组件
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    //判断是否是设计
    layout: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {
    this.upedataCarouselLastAsNavFor();
  },
  methods: {
    upedataCarouselLastAsNavFor() {
      const guideComponent = this.$refs.guideComponent;
      if (checkArray(this.data)) {
        this.data[0].col.forEach(element => {
          element.colList.forEach(box => {
            if (
              box.controlType == "carousel" &&
              typeof box.settings.asNavFor == "string"
            ) {
              let asNavFor = box.settings.asNavFor;
              const lastAsNavFor = asNavFor.substring(
                asNavFor.lastIndexOf(".") + 1
              );
              const guideComponentIndex = checkArrayString(
                guideComponent,
                "value.settings.ref",
                lastAsNavFor
              );
              box.settings.asNavFor =
                guideComponent[
                  guideComponentIndex
                ].$refs.guideComponentIndex.$refs[lastAsNavFor];
            }
          });
        });
      }
    },
    clickRow(row, box, event) {},
    setRow() {},
    addComponet(status, col) {
      this.col.list = col.colList;
      this.addComponeVisible = true;
    },

    //新增布局
    addLayout(status) {
      eventEmiter.emit("addLayout", [status]);
    },

    //删除的弹窗
    deleteContainerRow(value, index, fieldName, title, text) {
      this.deleteEmptyVisible.fieldName = fieldName;
      this.deleteEmptyVisible.title = title;
      this.deleteEmptyVisible.text = text;
      this.deleteEmptyVisible.index = index;
      this.deleteEmptyVisible.value = value;
      this.deleteEmptyVisible.visible = true;
    },

    //确认删除
    determineDelete() {
      const index = this.deleteEmptyVisible.index;
      switch (this.deleteEmptyVisible.fieldName) {
        case "col":
          this.deleteEmptyVisible.value.col[
            this.deleteEmptyVisible.index
          ].colList = [];
          break;
        case "row":
          this.data[index].col = [];
          break;
        case "container":
          this.data.splice(index, 1);
          break;
        default:
          this.deleteEmptyVisible.value.colList.splice(index, 1);
          break;
      }
      this.deleteEmptyVisible.visible = false;
    },

    //添加组件
    addPageColComponent(value) {
      const id = uuid.v4();
      this.col.component = { ...value, id };
      this.setComponeVisibleTitle = "设置组件";
      this.setComponeVisible = true;
      this.col.status = 0;

      //传递给轮播图组件
      if (value.controlType === "carousel") {
        this.$store.dispatch(
          "customPage/setCustomizepagesComponets",
          this.data
        );
      }
      setTimeout(() => {
        this.addComponeVisible = false;
      }, 33);
    },

    //完成设置属性
    setGuidePublicComponentFinish() {
      const setGuideComponentForm = this.$refs.setGuidePublicComponent.$refs
        .setGuideComponentForm;
      setGuideComponentForm.validate(valid => {
        if (valid) {
          this.col.component = {
            ...this.col.component,
            ...setGuideComponentForm.model
          };
          switch (this.col.status) {
            //新增col
            case 0:
              this.col.list.push(this.col.component);
              break;
            //修改col
            case 1:
              this.col.list[this.col.index] = { ...this.col.component };
              break;
            //修改container
            case 2:
              this.containerValue.container = {
                ...this.containerValue.container,
                ...this.col.component
              };
              break;
            //修改Row
            case 3:
              this.containerValue.row = {
                ...this.containerValue.row,
                ...this.col.component
              };
              break;
            //修改col
            case 4:
              this.containerValue.col[this.col.index] = {
                ...this.containerValue.col[this.col.index],
                ...this.col.component
              };
              break;
          }
          this.setComponeVisible = false;
          this.col.component = {};

          if (setGuideComponentForm.model.controlType === "carousel") {
            this.$nextTick(() => {
              this.upedataCarouselLastAsNavFor();
            });
          }
        }
      });
    },

    //修改属性
    setColComponent(value, index, col) {
      this.col.list = col.colList;
      this.col.component = { ...value };
      this.col.index = index;
      this.col.status = 1;
      this.setComponeVisibleTitle = "设置组件";
      this.setComponeVisible = true;
    },

    //Container和Row 设置属性
    setContainerRowTools(value, valueField, index, status) {
      this.col.component = value[valueField];
      if (valueField == "col") {
        this.col.component = value[valueField][index];
      }
      this.containerValue = value;
      this.col.index = index;
      this.setComponeVisibleTitle = "设置" + valueField;
      this.col.status = status;
      this.setComponeVisible = true;
    },

    //组件的样式
    guideComponentStyleClass(value) {
      let list = [];
      if (value && value.styleClass) {
        const styleClass = value.styleClass;

        const fontWeight = judgeStyleClass(styleClass, "fontWeight");
        const textAlign = judgeStyleClass(styleClass, "textAlign", "");
        const textLimit = judgeStyleClass(styleClass, "textLimit", "limit-");
        const textTransform = judgeStyleClass(styleClass, "textTransform");

        const borderLeft = judgeStyleClass(
          styleClass,
          "borderLeft",
          "border-l-"
        );
        const borderTop = judgeStyleClass(styleClass, "borderTop", "border-t-");
        const borderRight = judgeStyleClass(
          styleClass,
          "borderRight",
          "border-r-"
        );
        const borderBottom = judgeStyleClass(
          styleClass,
          "borderBottom",
          "border-b-"
        );
        const borderStyle = judgeStyleClass(styleClass, "borderStyle", "");

        const roundedTl = judgeStyleClass(styleClass, "roundedTl");
        const roundedTr = judgeStyleClass(styleClass, "roundedTr");
        const roundedBl = judgeStyleClass(styleClass, "roundedBl");
        const roundedBr = judgeStyleClass(styleClass, "roundedBr");

        // const roundedBr =  judgeStyleClass(styleClass,'lg|fontSize');
        // const roundedBr =  judgeStyleClass(styleClass,'roundedBr');
        // const roundedBr =  judgeStyleClass(styleClass,'roundedBr');
        // const roundedBr =  judgeStyleClass(styleClass,'roundedBr');
        // const roundedBr =  judgeStyleClass(styleClass,'roundedBr');
        // const roundedBr =  judgeStyleClass(styleClass,'roundedBr');
        // console.log(styleClass)

        const cursor = judgeStyleClass(styleClass, "cursor");
        const opacity = judgeStyleClass(styleClass, "opacity");
        const shadow = judgeStyleClass(styleClass, "shadow");
        const textDecoration = judgeStyleClass(styleClass, "textDecoration");
        const hoverTextDecoration = judgeStyleClass(
          styleClass,
          "hoverTextDecoration"
        );
        const hoverTextColor = judgeStyleClass(styleClass, "hoverTextColor");

        if (value.controlType === "row") {
          const rowWidth = judgeStyleClass(styleClass, "rowWidth", "w-");
          list.push(rowWidth);
        }

        if (value.controlType === "col") {
          const desktopWidth =
            this.pcFieldName +
            judgeStyleClass(styleClass, "desktopWidth", "w-");
          const ipadWidth =
            this.ipadFieldName + judgeStyleClass(styleClass, "ipadWidth", "w-");
          const mobileWidth = judgeStyleClass(styleClass, "mobileWidth", "w-");
          list.push(desktopWidth, ipadWidth, mobileWidth);
        }

        list = [...list, ...this.judgeStyleClassLgXl(styleClass)];

        list.push(
          fontWeight,
          textAlign,
          textLimit,
          textTransform,
          borderLeft,
          borderTop,
          borderRight,
          borderBottom,
          borderStyle,
          roundedTl,
          roundedTr,
          roundedBl,
          roundedBr,
          cursor,
          opacity,
          shadow,
          textDecoration,
          hoverTextDecoration,
          hoverTextColor
        );
      }
      return list.join(" ");
    },

    //判断lg 或者xl 的文本和间距样式
    judgeStyleClassLgXl(styleClass) {
      const array = [];
      const forFieldList = ["", this.ipadFieldName, this.pcFieldName];
      forFieldList.forEach(item => {
        let fontSize = judgeStyleClass(
          styleClass,
          item + "fontSize",
          item + "text-"
        );
        //判断是否修改文字大小
        if (item) {
          fontSize = styleClass[item + "typeFontSize"] ? fontSize : "";
        }
        const paddingLeft = judgeStyleClass(
          styleClass,
          item + "paddingLeft",
          item + "pl-"
        );
        const paddingTop = judgeStyleClass(
          styleClass,
          item + "paddingTop",
          item + "pt-"
        );
        const paddingRight = judgeStyleClass(
          styleClass,
          item + "paddingRight",
          item + "pr-"
        );
        const paddingBottom = judgeStyleClass(
          styleClass,
          item + "paddingBottom",
          item + "pb-"
        );
        const marginLeft = judgeStyleClass(
          styleClass,
          item + "marginLeft",
          item + "ml-"
        );
        const marginTop = judgeStyleClass(
          styleClass,
          item + "marginTop",
          item + "mt-"
        );
        const marginRight = judgeStyleClass(
          styleClass,
          item + "marginRight",
          item + "mr-"
        );
        const marginBottom = judgeStyleClass(
          styleClass,
          item + "marginBottom",
          item + "mb-"
        );
        array.push(
          fontSize,
          paddingLeft,
          paddingTop,
          paddingRight,
          paddingBottom,
          marginLeft,
          marginTop,
          marginRight,
          marginBottom
        );
      });
      return array;
    },

    //拖拽时
    cloneDog(e) {
      this.dragCloneCol = e;
    },

    //拖拽完成的
    onEndClone(e) {
      if (e.target.id != e.to.id) {
        let dataIndex = -1;
        let dataCol = -1;
        for (let index = 0; index < this.data.length; index++) {
          dataCol = checkArrayString(this.data[index].col, "id", e.to.id);
          if (dataCol != -1) {
            dataIndex = index;
            break;
          }
        }
        if (dataCol != -1) {
          this.data[dataIndex].col[dataCol].colList.splice(
            e.newIndex,
            0,
            this.dragCloneCol
          );
        }
      }
    },
    //设置aos 动画
    setAttributeAos(el, value) {
      //判断是否存在动画  不存在没必要设置属性
      if (value && value["dataAos"]) {
        this.setAttributeAosAnimation(el, "data-aos", value, "dataAos");
        this.setAttributeAosAnimation(
          el,
          "data-aos-delay",
          value,
          "dataAosDelay"
        );
        this.setAttributeAosAnimation(
          el,
          "data-aos-duration",
          value,
          "dataAosDuration"
        );
        this.setAttributeAosAnimation(
          el,
          "data-aos-offset",
          value,
          "dataAosOffset"
        );
        this.setAttributeAosAnimation(
          el,
          "data-aos-once",
          value,
          "dataAosOnce"
        );
      }
    },
    //设置aos 动画属性
    setAttributeAosAnimation(el, label, value, valueFieldName) {
      if (value) {
        el.setAttribute(label, value[valueFieldName]);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.layout-container:hover {
  border-style: solid;
  .set-attributes-container {
    display: flex;
  }
}
.layout-row:hover {
  border-style: solid;
  .set-attributes-row {
    display: flex;
    margin-left: 0px;
  }
}

.layout-col:hover {
  border-style: solid;
  .set-attributes-col {
    margin: 0;
    display: flex;
    margin-left: 0px;
  }
}

.layout-col-component:hover {
  border-style: solid;
  .set-attributes-col-component {
    display: flex;
  }
}
</style>
