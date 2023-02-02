<template>
<nav>
    <router-link to="/">Projects</router-link> |
    <router-link to="/addProject">Add a New Project</router-link>
</nav>
<router-view />
</template>

<script>
import {
    todoData
} from './components/todoData'

export default {
    name: 'app',
    lists: [todoData],

    mounted() {
        localStorage.setItem("todoLists", JSON.stringify(this.todoList));
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 25px;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: #42b983;
    text-decoration: none;

}
</style>
