<script>
import setGuideComponentProperty from "./setGuideComponentProperty";
//指引组件
// 传入组件类型  生成指定的组件
// 如传入类型：select   生成指定的select 组件
export default {
  render(h, cxt) {
    try {
      return h(require(`./${this.value.controlType}.vue`).default, {
        props: {
          value: this.value,
          form: this.form
        }
      });
    } catch (error) {
      throw new Error(
        "自定义页面找不到对应" + this.value.controlType + "的组件"
      );
    }
  },
  mixins: [setGuideComponentProperty],
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss"></style>
