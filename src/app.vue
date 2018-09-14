<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
    <!-- <div id="cover"></div> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color rgba(255, 255, 255, 0.4)
  z-index 1
}
</style>
