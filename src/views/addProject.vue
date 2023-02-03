<template>
<div class="projectWrapper">
    <form class="form">
        <label class="formLabel">TITLE</label>
        <input type="text" class="inputInfo" v-model="newTodo.name" />
        <label class="formLabel">DETAILS</label>
        <textarea row="10" class="textInfo" v-model="newTodo.description"></textarea>
        <button @click.prevent="formSubmit" class="formBtn">Add Project</button>
    </form>
</div>
</template>

<script>
import {
    todoMixin
} from '../components/todoMixin'
export default {
    name: "addProject",
    mixins: [todoMixin],
    data() {
        return {}
    },

    methods: {
        formSubmit() {

            this.todos.push(this.newTodo);
            this.newTodo = {
                name: '',
                description: ''
            };
        }
    }

}
</script>

<style>
.projectWrapper {
    background-color: white;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
    align-items: left;
    text-align: left;
    display: flex;
    border-radius: 10px;
    border: 8px solid #f2f2f2;

}

.inputInfo {

    border: none;
    border-bottom: 1px solid black;
}

.form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 90%;
    margin-bottom: 30px;
    margin-left: 60px;

}

.formLabel {
    color: #959da1;
    font-size: 22px;
    margin-bottom: 10px;
}

.textarea {
    width: 90%;
    border-color: #bec2c4;
    margin-top: 10px;
    font-size: 20px;
    color: gray;
}

.formBtn {

    width: 200px;
    height: 30px;
    align-items: center;
    margin-left: 38%;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: none;
    background-color: rgb(72, 155, 130);
    color: white;
    font-size: 22px;
}
</style>
