<template>
<div class="projectWrapper">
    <form class="form">
        <label class="formLabel">TITLE</label>
        <input type="text" class="inputInfo" v-model="newTodo.name" />
        <label class="formLabel">DETAILS</label>
        <textarea row="10" class="textInfo" v-model="newTodo.description"></textarea>
        <label class=" validateError">{{ error }}</label>
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
        return {
            error: "",

        }
    },

    methods: {
        formSubmit() {
            if (!this.newTodo.name) {
                this.error = 'Project title cannot be empty'
                return
            }
            if (!this.newTodo.description) {
                this.error = 'Project description cannot be empty'
                return
            } else {
                this.error = '',
                    this.todos.push({
                        ...this.newTodo,
                        id: this.todos.length + 1

                    });
            }

            localStorage.setItem("todos", JSON.stringify(this.todos));
            this.$router.push('/');

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

    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #bec2c4;

}

.inputInfo:focus {
    outline: none;
}


.validateError {
    color: red;
    font-size: 18px;
    margin-top: 10px;
    font-family: arial;

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

.textInfo {
    border-color: #bec2c4;
    margin-top: 10px;
    font-size: 20px;

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
