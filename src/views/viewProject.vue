<template>
<div class="viewLinks">
    <router-link :to="{ name: 'view', params: { view: view } }">view all</router-link>
    <router-link :to="{ name: 'ongoing', params: { view: ongoing } }">ongoing</router-link>
    <router-link :to="{ name: 'completed', params: { view: complete } }">completed</router-link>
    <router-view />
</div>
</template>

<script>
export default {
    name: "viewProject",
    data() {
        return {
            view: "view",
            ongoing: "ongoing",
            complete: "complete",
        };
    },
};
</script>

<style scoped>

.viewLinks {
    padding: 30px;
}

.viewLinks a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

.viewLinks a.router-link-exact-active {
    color: #42b983;
    text-decoration: none;

}
</style>
