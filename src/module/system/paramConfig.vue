<!--
  - paramConfig Vue 文件
  - @JsName paramConfig
  - @Description
  - @DateTime 2018/1/4 17:42
  - @author 亚茹
  -->
<template>
  <div>
    <m-Breadcrumb mTitle1="系统管理" mTitle2="参数配置"></m-Breadcrumb>
    <div class="paramConfig_content">
      <div class="paramContent">
        <div class="paramOne">
          <label>起送价格</label>
          <input type="text">
          <label>元</label>
        </div>
        <div class="paramTwo">
          <label>配送费用</label>
          <input type="text">
          <label>元</label>
        </div>
        <div class="paramThree">
          <label>起送价格</label>
          <input type="text">
          <label>元</label>
        </div>
        <div class="paramFour">
          <label>积分配置</label>
          <input type="text"><label>元</label>
          =
          <input type="text"><label>积分</label>
        </div>
        <div class="paramLast">
          <input type="button" value="取消">
          <input type="button" value="确定">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import mBreadcrumb from './../../component/headerTag.vue'
  export default {
    name: 'paramConfig',
    data () {
      return {
      }
    },
    methods: {
    },
    mounted () {
    },
    components: {
      mBreadcrumb
    }
  }
</script>
<!-- 引入 paramConfig Scss 文件  -->
<style lang="scss" scoped>@import "scss/paramConfig";</style>
