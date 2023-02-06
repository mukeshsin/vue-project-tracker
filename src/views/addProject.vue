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
            console.log(this.todos.length)
            this.todos.push({
                ...this.newTodo,
                id: this.todos.length + 1

            });
            console.log(this.todos.length)


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
    border-radius: 18px;

}

.inputInfo {

    border: none;
    border-bottom: 1px solid #e5e4e3;
    margin-bottom: 10px
}

.form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 80%;
    margin-bottom: 30px;
    margin-left: 70px;
    border-radius: 16px;

}

.formLabel {
    color: #e5e4e3;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 700;

}

.textarea {
    width: 90%;
    border-color: #bec2c4;
    margin-top: 10px;
    font-size: 20px;
    color: #e5e4e3;
}

.formBtn {

    width: 150px;
    height: 30px;
    align-items: center;
    margin-left: 41%;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: none;
    background-color: #00b486;
    color: white;
    font-size: 20px;
}
</style>
