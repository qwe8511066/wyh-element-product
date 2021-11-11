<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="flexBox">
            <div class="flex1">设计页面</div>

            <div v-if="data && data.length > 0">
              <el-button size="mini" @click="visible = true">预览</el-button>
            </div>
          </div>

          <div class="">
            <customePage :data="data" :layout="true" ref="test11"></customePage>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog
      title="预览页面"
      :visible="visible"
      v-if="visible"
      width="900px"
      append-to-body
      :fullscreen="true"
      :destroy-on-close="true"
      @close="visible = false"
      :close-on-click-modal="false"
    >
      <customePage :data="data" :layout="false"></customePage>
      <div slot="footer">
        <el-button @click="visible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Affix from "easy-affix";
import customePage from "@/components/customePage/index";
import eventEmiter from "@/utils/eventEmiter";
import { uuid } from "vue-uuid";
import { getMultistage } from "@/utils/index";
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
      data: [{"container":{"controlType":"container","classes":"","type":"container","animation":{}},"row":{"controlType":"row","classes":"","styleClass":{"rowWidthModel":"grid","rowWidth":12},"animation":{}},"col":[{"classes":"","colList":[{"controlType":"imgae","title":"图片","id":"a80d7e10-7ede-4970-a59a-00b29b958b03","styleClass":{"imgWidthModel":"default","desktopWidthModel":"grid","desktopWidth":12,"ipadWidthModel":"grid","ipadWidth":12,"mobileWidthModel":"grid","mobileWidth":12,"xl|fontSize":16,"lg|fontSize":16,"fontSize":16,"styleSpacingLeftModel":"","paddingLeftModel":"","paddingTopModel":"","paddingRightModel":"","paddingBottomModel":"","marginLeftModel":"","marginTopModel":"","marginRightModel":"","marginBottomModel":""},"url":"http://english.bjchy.gov.cn/sites/default/files/2021-06/internationalHealthcare2.png","skeleton":false,"style":{},"animation":{"dataAosOffset":120,"dataAosDelay":0,"dataAosDuration":1000,"dataAosOnce":false},"classes":"","colList":[]}],"controlType":"col","styleClass":{"desktopWidthModel":"grid","desktopWidth":12,"ipadWidthModel":"grid","ipadWidth":12,"mobileWidthModel":"grid","mobileWidth":12,"xl|fontSize":16,"lg|fontSize":16},"animation":{},"id":"d5aab7cb-76cb-4ede-8ef1-d5a434833b5c","style":{}},{"classes":"","colList":[{"controlType":"imgae","title":"图片","id":"35578385-c6a1-4300-97ac-1f78484f7b36","styleClass":{"imgWidthModel":"default","fontSize":16,"styleSpacingLeftModel":"","paddingLeftModel":"","paddingTopModel":"","paddingRightModel":"","paddingBottomModel":"","marginLeftModel":"","marginTopModel":"","marginRightModel":"","marginBottomModel":"","xl|fontSize":16,"lg|fontSize":16},"url":"http://english.bjchy.gov.cn/sites/default/files/2021-06/internationalHealthcare3.png","skeleton":false,"style":{},"animation":{"dataAosOffset":120,"dataAosDelay":0,"dataAosDuration":1000,"dataAosOnce":false}}],"controlType":"col","styleClass":{"desktopWidthModel":"grid","desktopWidth":12,"ipadWidthModel":"grid","ipadWidth":4,"mobileWidthModel":"grid","mobileWidth":12,"xl|fontSize":16,"lg|fontSize":16},"animation":{},"id":"967aa992-1622-4ff4-b0ff-42bb89929c6b","style":{}},{"classes":"","colList":[{"controlType":"imgae","title":"图片","id":"5a7c9cb6-156f-47c2-b272-3283fbaff116","styleClass":{"imgWidthModel":"default","fontSize":16,"styleSpacingLeftModel":"","paddingLeftModel":"","paddingTopModel":"","paddingRightModel":"","paddingBottomModel":"","marginLeftModel":"","marginTopModel":"","marginRightModel":"","marginBottomModel":"","xl|fontSize":16,"lg|fontSize":16},"url":"http://english.bjchy.gov.cn/sites/default/files/2021-06/internationalHealthcare4.png","skeleton":false,"style":{},"animation":{"dataAosOffset":120,"dataAosDelay":0,"dataAosDuration":1000,"dataAosOnce":false}}],"controlType":"col","styleClass":{"desktopWidthModel":"grid","desktopWidth":12,"ipadWidthModel":"grid","ipadWidth":4,"mobileWidthModel":"grid","mobileWidth":12,"xl|fontSize":16,"lg|fontSize":16},"animation":{},"id":"5f955980-f3cf-4006-b8e1-a648325485bf","style":{}}],"id":"aa5b1097-45f7-4bee-9654-aa5c273c70c1"}
        // {
        //   row: {
        //     controlType: "row",
        //     styleClass: {
        //       rowWidthModel: "grid",
        //       rowWidth: 12
        //     },
        //     animation: {}
        //   },
        //   container: {
        //     class: "",
        //     type: "container",
        //     controlType: "container",
        //     animation: {}
        //   },
        //   col: [
        //     {
        //       classes: "",
        //       id: uuid.v4(),
        //       animation: {},
        //       colList: [
        //         {
        //           animation: {},
        //           controlType: "title",
        //           title: "标题111",
        //           id: "b6f2e5e9-4456-4c79-b5c4-7633ab066d1e",
        //           style: {},
        //           styleClass: {
        //             fontSize: 16,
        //             styleSpacingLeftModel: "",
        //             paddingLeftModel: "",
        //             paddingTopModel: "",
        //             paddingRightModel: "",
        //             paddingBottomModel: "",
        //             marginLeftModel: "",
        //             marginTopModel: "",
        //             marginRightModel: "",
        //             marginBottomModel: "",
        //             paddingLeft: 0,
        //             paddingTop: 0,
        //             paddingRight: 0,
        //             paddingBottom: 0,
        //             marginLeft: 0,
        //             marginTop: 0,
        //             marginRight: 0,
        //             marginBottom: 0,
        //             borderLeft: 0,
        //             borderTop: 0,
        //             borderRight: 0,
        //             borderBottom: 0
        //           },
        //           target: false
        //         },
        //         {
        //           animation: {},
        //           controlType: "title",
        //           title: "标题333",
        //           id: "fa7dc05a-1364-4cbd-82c3-c38f90da84a5",
        //           style: {},
        //           styleClass: {
        //             fontSize: 16,
        //             styleSpacingLeftModel: "",
        //             paddingLeftModel: "",
        //             paddingTopModel: "",
        //             paddingRightModel: "",
        //             paddingBottomModel: "",
        //             marginLeftModel: "",
        //             marginTopModel: "",
        //             marginRightModel: "",
        //             marginBottomModel: "",
        //             paddingLeft: 0,
        //             paddingTop: 0,
        //             paddingRight: 0,
        //             paddingBottom: 0,
        //             marginLeft: 0,
        //             marginTop: 0,
        //             marginRight: 0,
        //             marginBottom: 0,
        //             borderLeft: 0,
        //             borderTop: 0,
        //             borderRight: 0,
        //             borderBottom: 0
        //           },
        //           target: false
        //         },
        //         {
        //           animation: {},
        //           controlType: "title",
        //           title: "标题555555",
        //           id: "0ffad9cf-785c-4933-8235-ea9683fa5b82",
        //           style: {},
        //           styleClass: {
        //             fontSize: 16,
        //             styleSpacingLeftModel: "",
        //             paddingLeftModel: "",
        //             paddingTopModel: "",
        //             paddingRightModel: "",
        //             paddingBottomModel: "",
        //             marginLeftModel: "",
        //             marginTopModel: "",
        //             marginRightModel: "",
        //             marginBottomModel: "",
        //             paddingLeft: 0,
        //             paddingTop: 0,
        //             paddingRight: 0,
        //             paddingBottom: 0,
        //             marginLeft: 0,
        //             marginTop: 0,
        //             marginRight: 0,
        //             marginBottom: 0,
        //             borderLeft: 0,
        //             borderTop: 0,
        //             borderRight: 0,
        //             borderBottom: 0
        //           },
        //           target: false
        //         },
        //         {
        //           controlType: "carousel",
        //           id: "be82049e-c0e5-48bd-8b92-9ac119cea949",
        //           componentsList: [
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f8416511bf97",
        //               title: "",
        //               value: "<p>a1</p>"
        //             },
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f8416511bf98",
        //               title: "",
        //               value: "<p>a2</p>"
        //             },
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f8416511bf99",
        //               title: "",
        //               value: "<p>a3</p>"
        //             },
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f2416511bf99",
        //               title: "",
        //               value: "<p>a4</p>"
        //             }
        //           ],
        //           settings: {
        //             accessibility: true,
        //             adaptiveHeight: false,
        //             arrows: true,
        //             asNavFor: "$refs.c2",
        //             autoplay: false,
        //             autoplaySpeed: 3000,
        //             centerMode: false,
        //             centerPadding: "50px",
        //             cssEase: "ease",
        //             dots: false,
        //             dotsClass: "slick-dots",
        //             draggable: true,
        //             edgeFriction: 0.35,
        //             fade: false,
        //             focusOnSelect: false,
        //             infinite: true,
        //             initialSlide: 0,
        //             lazyLoad: "ondemand",
        //             pauseOnDotsHover: false,
        //             pauseOnFocus: false,
        //             pauseOnHover: true,
        //             responsive: [],
        //             rows: 1,
        //             rtl: false,
        //             slidesPerRow: 1,
        //             slidesToScroll: 1,
        //             slidesToShow: 1,
        //             speed: 500,
        //             swipe: true,
        //             swipeToSlide: false,
        //             touchMove: true,
        //             touchThreshold: 5,
        //             useCSS: true,
        //             useTransform: true,
        //             variableWidth: false,
        //             vertical: false,
        //             waitForAnimate: true,
        //             ref: "c1"
        //           }
        //         }
        //       ],
        //       controlType: "col",
        //       styleClass: {
        //         desktopWidthModel: "grid",
        //         desktopWidth: 6,
        //         ipadWidthModel: "grid",
        //         ipadWidth: 6,
        //         mobileWidthModel: "grid",
        //         mobileWidth: 12
        //       }
        //     },
        //     {
        //       classes: "",
        //       id: uuid.v4(),
        //       colList: [
        //         {
        //           controlType: "title",
        //           title: "标题222",
        //           id: "fe473d0c-ea93-45fb-89aa-a6c966224f05",
        //           style: {},
        //           styleClass: {
        //             fontSize: 16,
        //             styleSpacingLeftModel: "",
        //             paddingLeftModel: "",
        //             paddingTopModel: "",
        //             paddingRightModel: "",
        //             paddingBottomModel: "",
        //             marginLeftModel: "",
        //             marginTopModel: "",
        //             marginRightModel: "",
        //             marginBottomModel: "",
        //             paddingLeft: 0,
        //             paddingTop: 0,
        //             paddingRight: 0,
        //             paddingBottom: 0,
        //             marginLeft: 0,
        //             marginTop: 0,
        //             marginRight: 0,
        //             marginBottom: 0,
        //             borderLeft: 0,
        //             borderTop: 0,
        //             borderRight: 0,
        //             borderBottom: 0
        //           },
        //           target: false
        //         },
        //         {
        //           controlType: "title",
        //           title: "标题4444",
        //           id: "a23cda8e-0bd8-443a-bee5-cc8ffdb05452",
        //           style: {},
        //           styleClass: {
        //             fontSize: 16,
        //             styleSpacingLeftModel: "",
        //             paddingLeftModel: "",
        //             paddingTopModel: "",
        //             paddingRightModel: "",
        //             paddingBottomModel: "",
        //             marginLeftModel: "",
        //             marginTopModel: "",
        //             marginRightModel: "",
        //             marginBottomModel: "",
        //             paddingLeft: 0,
        //             paddingTop: 0,
        //             paddingRight: 0,
        //             paddingBottom: 0,
        //             marginLeft: 0,
        //             marginTop: 0,
        //             marginRight: 0,
        //             marginBottom: 0,
        //             borderLeft: 0,
        //             borderTop: 0,
        //             borderRight: 0,
        //             borderBottom: 0
        //           },
        //           target: false
        //         },
        //         {
        //           controlType: "carousel",
        //           id: "be82049e-c0e5-48bd-8b92-9ac119cea919",
        //           componentsList: [
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f8416511bf17",
        //               title: "",
        //               value: "<p>b1</p>"
        //             },
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f8416511bf18",
        //               title: "",
        //               value: "<p>b2</p>"
        //             },
        //             {
        //               id: "d5414097-71fe-460f-8d3c-f8416511bf19",
        //               title: "",
        //               value: "<p>b3</p>"
        //             },
        //             {
        //               id: "d5414092-71fe-460f-8d3c-f8416511bf19",
        //               title: "",
        //               value: "<p>b4</p>"
        //             }
        //           ],
        //           settings: {
        //             accessibility: true,
        //             adaptiveHeight: false,
        //             arrows: true,
        //             asNavFor: "$refs.c1",
        //             autoplay: false,
        //             autoplaySpeed: 3000,
        //             centerMode: false,
        //             centerPadding: "50px",
        //             cssEase: "ease",
        //             dots: false,
        //             dotsClass: "slick-dots",
        //             draggable: true,
        //             edgeFriction: 0.35,
        //             fade: false,
        //             focusOnSelect: false,
        //             infinite: true,
        //             initialSlide: 0,
        //             lazyLoad: "ondemand",
        //             pauseOnDotsHover: false,
        //             pauseOnFocus: false,
        //             pauseOnHover: true,
        //             responsive: [],
        //             rows: 1,
        //             rtl: false,
        //             slidesPerRow: 1,
        //             slidesToScroll: 1,
        //             slidesToShow: 1,
        //             speed: 500,
        //             swipe: true,
        //             swipeToSlide: false,
        //             touchMove: true,
        //             touchThreshold: 5,
        //             useCSS: true,
        //             useTransform: true,
        //             variableWidth: false,
        //             vertical: false,
        //             waitForAnimate: true,
        //             ref: "c2"
        //           }
        //         }
        //       ],
        //       controlType: "col",
        //       styleClass: {
        //         desktopWidthModel: "grid",
        //         desktopWidth: 6,
        //         ipadWidthModel: "grid",
        //         ipadWidth: 6,
        //         mobileWidthModel: "grid",
        //         mobileWidth: 12
        //       }
        //     }
        //   ]
        // }
      ],
      visible: false
    };
  },
  created() {
    //添加布局
    eventEmiter.on("addPageLayout", data => {
      let {value,index} = data
      value.id = uuid.v4();
      this.data.splice(index, 0, value);
    });
  },

  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss"></style>
