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
            //嵌套布局
            const layoutNestType = el.getAttribute('layout-nest-type');
            switch (componentType) {
              case 'imgae':
                el.querySelectorAll('div').forEach(item => {
                  item.classList.add('md|h-full')
                })
                break;
              case 'tabs':
                el.classList.add('md|flex');
                el.classList.add('md|flex-col');
                el.querySelector('.el-tabs__content').classList.add('md|h-full')
                break;
              default:
                break;
            }

            if (layoutNestType) {
              checkLayoutNestLayoutRootayoutNestSetHeight(el);
            }

            checkColGroupSetHeight(el);
            break;
          //鼠标划过col 缩放图片
          case 'hoverColImgZoom':
            const _img = el.querySelector('img');
            const _addImgList = ['transform','duration-1000']
            _addImgList.forEach(item=>{
              _img.classList.add(item);
            })
            _img.parentNode.classList.add('overflow-hidden');
            //鼠标进
            el.onmouseover = function () {
              _img.classList.add('scale-110');
            }
            //鼠标出
            el.onmouseout = function () {
              _img.classList.remove('scale-110');
              _img.classList.add('scale-100');
            }
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
  if (el.className.includes('list-group')) {
    el.classList.add('md|flex');
    el.classList.add('md|flex-col');
  } else {
    checkColGroupSetHeight(el.parentNode);
  }
}

function checkLayoutNestLayoutRootayoutNestSetHeight(el) {
  el.classList.add('md|h-full');
  if (el.className.includes('layoutNestLayoutRoot')) {

  } else {
    if (el.className.includes('layoutNestLayoutChild')) {
      el.classList.add('md|flex');
      el.classList.add('md|flex-col');
    }
    checkLayoutNestLayoutRootayoutNestSetHeight(el.parentNode);
  }
}