<template>
  <div class=""  :style="[value.style]">
    <a v-if="value.link" :href="value.link" :target="value.target?'_blank':''">
      {{value.title}}
    </a>
    <span v-else>{{value.title}}</span>
  </div>
</template>

<script>
import guideComponentProperty from './guideComponentProperty'
export default {
  name: 'customerPageTitle',
  mixins: [guideComponentProperty],
  props: {
  },
  data() {
    return {}
  },
  computed: {},
  created() {
  },
  methods: {
    outPutForm() {},
  },
}
</script>

<style scoped>
</style>
