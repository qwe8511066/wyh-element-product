
import ElementUI from 'element-ui'
import wyhElementTable from '@/components/LbTable/index'
import dialogWyhElementChoose from '@/components/dialogWyhElementChoose/index'
import dialogWyhElementChooseTabs from '@/components/dialogWyhElementChooseTabs/index'
import dialogWyhElementChooseSelect from '@/components/dialogWyhElementChooseSelect/index'
import buttonPermission from '@/components/buttonPermission/index'
import CodeView from "vue-code-view";
import VueClipboard from 'vue-clipboard2'
wyhElementTable.mixins[0].props.definitionData.default = 'data.list'
wyhElementTable.mixins[0].props.definitionTotal.default = 'data.totalCount'
// 全局自定义组件库
VueClipboard.config.autoSetContainer = true // add this line
const publicComponents = {
  install: function (Vue) {
    Vue.use(ElementUI);
    Vue.use(CodeView);
    Vue.use(VueClipboard);
    Vue.component(wyhElementTable.name, wyhElementTable)
    Vue.component(dialogWyhElementChoose.name, dialogWyhElementChoose)
    Vue.component(dialogWyhElementChooseTabs.name, dialogWyhElementChooseTabs)
    Vue.component(dialogWyhElementChooseSelect.name, dialogWyhElementChooseSelect)
    Vue.component(buttonPermission.name, buttonPermission)
  }
}

// 导出组件
export default publicComponents
