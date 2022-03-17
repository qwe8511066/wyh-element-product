import Vue from 'vue';
import { checkArray } from '@/utils/index'
// v-guideComponentTheRemainingHighly: 自定义页面的自定义组件占据剩余高度
Vue.directive('guideComponentDirective', {
  inserted(el, binding, vnode, oldVnode) {
    if (checkArray(binding.value)) {
      binding.value.forEach(key => {
        switch (key) {
          //给组件占据剩余的高度
          case 'theRemainingHighly':
            const componentType = el.getAttribute('component-type')
            switch (componentType) {
              case 'imgae':
                el.querySelectorAll('div').forEach(item=>{
                  item.classList.add('md|h-full')
                })
                break;
                case 'tabs':
                  el.classList.add('md|flex');
                  el.classList.add('md|flex-col');
                  el.querySelector('.el-tabs__content').classList.add('md|h-full')
                  // el.querySelectorAll('div').forEach(item=>{
                  //   item.classList.add('md|h-full')
                  // })
                  break;  
              default:
                break;
            }
           
            checkColGroupSetHeight(el);
            break;

          default:
            break;
        }
      });
    }
  }
})

//找到col 下的list-group 
function checkColGroupSetHeight(el) {
  el.classList.add('md|h-full');
  if(el.className.includes('list-group')){
    el.classList.add('md|flex');
    el.classList.add('md|flex-col');
  }else{
    checkColGroupSetHeight(el.parentNode);
  }
}