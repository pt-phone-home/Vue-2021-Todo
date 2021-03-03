<template>
  <the-header></the-header>
  <section>
      <div class="button-container">
        <button @click="changeSelectedComponent('todo-list')">ToDo List</button>
        <button @click="changeSelectedComponent('add-todo')">New Todo</button>
      </div>g
  </section>
  <section class="main-section">
      <!-- <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive> -->
      
      <todo-list :todos="todos"
      @toggle-completed="toggleCompleted"
      ></todo-list>
      <add-todo @new-todo="addTodo"></add-todo>
  </section>
</template>

<script>
import TheHeader from './components/TheHeader';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
export default {
  name: 'App',
  components: {
    TheHeader,
    TodoList,
    AddTodo,
  },
  data () {
    return {
      todos: [
        {
          id: new Date().toISOString(),
          title: 'Finish Vue Course',
          completed: false,
        }
      ],
      selectedComponent: 'todo-list',
    }
  },
  methods: {
    changeSelectedComponent(component) {
      this.selectedComponent = component;
    },
    addTodo(title) {
      
      const newTodo = {
        id: new Date().toISOString(),
        title: title,
        completed: false,
      }
      this.todos.push(newTodo);
    }, 
    toggleCompleted(id) {
      const selectedTodo = this.todos.find(function (todo) {
        return todo.id === id;
      })
      selectedTodo.completed = !selectedTodo.completed;
    }
  }
}
</script>

<style scoped>
.main-section {
  margin: 0 auto;
  width: 30%;
}
.button-container {
  padding-top: .5rem;
  margin: 0 auto;
  display: flex;
  width: 30%;
  justify-content: space-around;
}
button {
  background-color: cornflowerblue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
