<template>
    <div class="tabbar">
       <slot></slot>
    </div>
</template>
<script>
export default {
  props: ['value']
}
</script>
<style lang="less">
.tabbar{
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  height: 50px;
  background: #fff;
  border-top: 1px solid #e4e4e4;
}
</style>
