<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="flexBox">
            <div class="flex1">设计页面</div>

            <div v-if="data && data.length > 0">
              <el-button size="mini" @click="savaData()">保存</el-button>
              <el-button size="mini" @click="customizePagePreview()"
                >预览</el-button
              >
            </div>
          </div>

          <div class="">
            <customePage :data="data" :layout="true"></customePage>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Affix from "easy-affix";
import customePage from "@/components/customePage/index";
import eventEmiter from "@/utils/eventEmiter";
import { uuid } from "vue-uuid";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
import { checkArrayString } from "@/utils";

export default {
  name: "customPage",
  components: {
    Affix,
    customePage,
    draggable,
    VueSlickCarousel,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    //添加布局
    eventEmiter.on("addPageLayout", (data) => {
      let { value, index, layoutDataCol } = data;
      value.id = uuid.v4();
      if (layoutDataCol) {
        // this.data.forEach((element) => {
        //   const colIndex = checkArrayString(
        //     element.col,
        //     "id",
        //     layoutDataCol.id
        //   );
        //   if (colIndex != -1) {
        //     element.col[colIndex].layouts.splice(index, 0, value);
        //     // this.$forceUpdate();
        //     setTimeout(() => {
        //       this.$forceUpdate();
        //       console.log("1111");
        //     }, 1111);
        //   }
        // });
      } else {
        this.data.splice(index, 0, value);
      }
      // console.log(this.data);
    });
    this.init();
  },

  mounted() {},
  computed: {},
  methods: {
    savaData() {
      const key = "customPage" + this.$route.params.id;
      window.localStorage.setItem(key, JSON.stringify(this.data));
      this.$message("保存成功");
    },
    init() {
      const key = "customPage" + this.$route.params.id;
      const data = window.localStorage.getItem(key);
      if (data) {
        this.data = eval(data);
      }
    },
    customizePagePreview() {
      this.savaData();
      this.$router.push("/customizePagePreview/" + this.$route.params.id);
    },
  },
};
</script>
<style lang="scss"></style>
