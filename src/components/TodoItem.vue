<template>
    <li @click="$emit('toggle-completed', id)"
    :class="{completed: completed}"
    >{{title}}</li>    
</template>
<script>
export default {
    props: ['title', 'id', 'completed'],
    
}
</script>
<style scoped>
.completed {
    text-decoration: line-through;
}

</style>