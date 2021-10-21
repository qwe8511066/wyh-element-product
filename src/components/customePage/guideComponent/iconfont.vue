<template>
  <div class="flex" :style="[value.style]">
    <div class=""><span :class="[value.fontFamily,value.fontClass,guideComponentStyleClass(value)]"></span></div>
    <div v-if="value&&value.value" class="flex-1 pl-5"  v-html="value.value"></div>
  </div>
</template>

<script>
import guideComponentProperty from './guideComponentProperty'
import { judgeStyleClass } from '@/utils';
export default {
  name: 'customerPageTitle',
  mixins: [guideComponentProperty],
  props: {
  },
  data() {
    return {
      pcFieldName:this.$style.pcFieldName,
      ipadFieldName:this.$style.ipadFieldName,
    }
  },
  computed: {},
  created() {
  },
  methods: {
    outPutForm() {},
    //组件的样式
    guideComponentStyleClass(value){
       let list = []
      if(value && value.styleClass){
        const styleClass = value.styleClass;
        const forFieldList = ['',this.ipadFieldName,this.pcFieldName];
        forFieldList.forEach(item=>{
          let fontSize =   judgeStyleClass(styleClass,item+'fontSize',item+'text-');
          //判断是否修改文字大小 
          if(item){
            fontSize = styleClass[item+'typeFontSize']?fontSize:'';
          }
          list.push(fontSize)
        })
      }
      return list.join(' ');
    },
  },
}
</script>

<style scoped>
</style>
