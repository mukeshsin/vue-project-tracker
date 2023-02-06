<template>
<div class="mainContainer">
    <nav class="nav-size-adjust">
        <router-link class="nav-link" to="/">Projects</router-link>
        <router-link class="nav-link" to="/addProject">Add a New Project</router-link>
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
.mainContainer {
    background-color: #f2f2f2;
    width: 80%;
    padding-top: 12px;
    padding-bottom:23px;
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

.nav-size-adjust{
    font-size:19px;
    color:#a09e9b
}

.nav-link {
    margin-right: 15px;
    text-decoration: none;

}

nav a {
    font-weight: bold;
    color: #d2d4d5;

}

nav a.router-link-exact-active {
    border: 1px, solid, #42b983;
    border-bottom: 2px solid #42b983;
  
}
</style>
