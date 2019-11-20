<template>
  <div class="todo-list">
    <div class="card" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between">
        <span>{{ todo.title }}</span>
        <!-- <button class="btn btn-delete">삭제</button> -->
        <span @click="deleteTodo(todo)">삭제</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    }
  },
  computed: {
    options() {
      return this.$store.getters.options
    }
  },
  methods: {
    deleteTodo(todo) {
      // option을 만들어 주는 것이 아닌 vuex store 에 있는 options 에 접근 해서 가져온다.
      // session 에 계속 접근하는 것은 프로그램에 부담이 간다.
      // this.$session.start()
      // const token = this.$session.get('jwt')
      // const options = {
      //   headers: {
      //     Authorization: 'JWT ' + token
      //   }
      // }
      const SERVER_IP = process.env.VUE_APP_SERVER_IP

      axios.delete(`${SERVER_IP}/api/v1/todos/${todo.id}/`, this.options)
        .then(response => {
          console.log(response)
          const idx = this.todos.indexOf(todo)
          if (idx > -1) {
            this.todos.splice(idx, 1)
          }

        })
        .catch(error => {
          console.error(error)
        })
    },
  }
}
</script>

<style>

</style>