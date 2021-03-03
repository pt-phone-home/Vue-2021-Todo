<template>
    <div>
        <h2>Add ToDo</h2>
        <form @submit.prevent="addTodo">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="formData.title">
            </div>
            <div>
                <button>Add Todo</button>
            </div>
        </form>
        <teleport to="body">
            <base-alert v-if="invalidForm">
                <h2>Invalid Entry</h2>
                <p>Please add some text to your Todo Item</p>
                <button @click="invalidForm = false">Okay</button>
            </base-alert>
        </teleport>    
    </div>    
</template>
<script>
export default {
    data () {
        return {
            formData: {
                title: '',
            },
            invalidForm: false,
        }
    },
    methods: {
        addTodo() {
            if (this.formData.title === '') {
                this.invalidForm = true;
                return;
            }
            this.$emit('new-todo', this.formData.title);
            this.formData.title = '';
        }
    }
}
</script>
<style scoped>

</style>