<template>
<div class="mainContainer">
<nav>
    <router-link to="/">Projects</router-link> |
    <router-link to="/addProject">Add a New Project</router-link>
</nav>
<router-view />
</div>
</template>

<script>
export default {
    name: 'app',

}
</script>

<style>
.mainContainer{
    background-color:#f2f2f2;
    width: 80%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
}

nav {
    padding:2px;

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
