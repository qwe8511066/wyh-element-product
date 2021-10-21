<template>
  <div class="" :style="[value.style]">
    <a
      v-if="value.link"
      :href="value.link"
      :target="value.target ? '_blank' : ''"
    >
      <img :src="value.url" :class="[guideComponentStyleClass()]" />
    </a>
    <img  v-else :src="value.url"  :class="[guideComponentStyleClass()]" />
  </div>
</template>

<script>
import guideComponentProperty from "./guideComponentProperty";
import { judgeStyleClass } from '@/utils';
export default {
  name: "customerPageImage",
  mixins: [guideComponentProperty],
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    
  },
  methods: {
    //组件的样式
    guideComponentStyleClass() {
      let list = [];
      if (this.value && this.value.styleClass && this.value.imgWidthModel!='default') {
        const styleClass = this.value.styleClass
        const imgWidth =  judgeStyleClass(styleClass,'imgWidth','w-')
        const blockAlign =  judgeStyleClass(styleClass,'blockAlign','')
        list.push(imgWidth,blockAlign)
      }
      return list.join(' ');
    }
  }
};
</script>

<style scoped></style>
