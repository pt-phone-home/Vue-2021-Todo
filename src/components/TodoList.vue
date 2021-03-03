<template>
    <div class="active-todos">
        <h2>Active ToDos</h2>
        <ul>
            <todo-item v-for="todo in todos" 
            :key="todo.id" 
            :title="todo.title"
            :id="todo.id"
            :completed="todo.completed"
            @toggle-completed="toggleCompleted"
            >
            
            </todo-item>
        </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem';
export default {
props: ['todos'],
components: {
    TodoItem,
},
methods: {
    toggleCompleted(id) {
        this.$emit('toggle-completed', id);
    }
}    
}
</script>
<style scoped>
.active-todos {
    background-color: gainsboro;
}
h2 {
 text-align: center;
 padding-top: 20px;
}

</style>