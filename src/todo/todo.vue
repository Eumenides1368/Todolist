<!-- todo -->
<template>
  <section class="view-app">
    <input type="text" 
      class="add-input"
      autofocus="autofocus"
      placeholder="想干啥(虽然啥都不想干)"
      v-on:keyup.enter="addTodo">
    <item 
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"></item>
    <tabs 
      :filter="filter" 
      :todos="todos"
      @toggle="toggleFilter"
      @clearAll="clearAllCompleted"></tabs>
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    };
  },

  methods: {
    addTodo(e){
      //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter(state) {
      this.filter = state
    },
    clearAllCompleted(){
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all'){
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  }
}

</script>
<style lang='stylus' scoped>
  .view-app {
    width 600px
    margin 0 auto 
    box-shadow 0 0 5px #666666
  }
  .add-input {
    width 100%
    font-size 24px
    font-family ''Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif'
    line-height 1.4em
    border 0
    outline none 
    color inherit
    padding 6px
    border 1px solid #999999
    box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2) 
    box-sizing: border-box
    font-smoothing antialiased 
    padding 16px 16px 16px 60px
    border none 
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0,2)
    z-index 100
  }
</style>