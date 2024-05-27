<template>
    <div class="another-theme-container">
      <Navbar/>
      <Content/>
    </div>
</template>
<script>
// 集成父主题的 Navbar 组件
import Navbar from '@parent-theme/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="stylus">
.another-theme-container {
  margin: 0 auto;
  max-width: 700px;
  padding: 0 1rem;
  padding-top: $navbarHeight;
}
</style>