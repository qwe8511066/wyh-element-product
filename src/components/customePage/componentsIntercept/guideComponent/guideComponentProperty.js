export default {
  name: 'guideComponentProperty',
  props: {
    value: {
      type: Object,
    },
    //判断是否是设计
    layout: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },

  create() {
    console.log(this.value)
    // if(this.value.style){
    //   // Object.keys(this.value.style).forEach(keys => {

    //   // })
    //   this.value.styleFormat = this.value.style.map((value,key,arr) => {
    //     console.log(value + "---" + key)
    //   })
    //   console.log(this.value)
    // }
  },
  methods: {

  },
}
