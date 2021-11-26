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

export default {
  name: "customPage",
  components: {
    Affix,
    customePage,
    draggable,
    VueSlickCarousel
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    //添加布局
    eventEmiter.on("addPageLayout", data => {
      let { value, index } = data;
      value.id = uuid.v4();
      this.data.splice(index, 0, value);
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
    }
  }
};
</script>
<style lang="scss"></style>
