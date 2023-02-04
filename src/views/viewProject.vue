<template>
<div class="projectContainer">
    <div class="viewproject" v-show="!showForm">
        <div class="allBtn">
            <button @click.prevent="viewAll" class="viewBtn">VIEW ALL</button>
            <button @click.prevent="completed" class="completeBtn">COMPLETED</button>
            <button @click.prevent="ongoing" class="ongoingBtn">ONGOING</button>
        </div>

        <div v-for="todo in filteredTodos" :key="todo.id" class="wrap">
            <div class="border-1" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
            <h1 class="todoHead">{{ todo.name }}</h1>

            <div class="font-icon">
                <div class="icon" :class="todo.isComplete ? 'iconComp' : 'iconIncomp'" @click="taskCheck(filteredTodos.indexOf(todo))">
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="icon" @click="updateTask(filteredTodos.indexOf(todo))">
                    <i class="fa-sharp fa-solid fa-pen"></i>
                </div>
                <div class="icon" @click="deleteTask(todo.id)">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="border-2" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
            <p class="todoPara">{{ todo.description }}</p>

        </div>
    </div>
    <div class="formWrapper" v-show="showForm">
        <form class="form">
            <label class="formLabel">TITLE</label>
            <input type="text" class="inputInfo" v-model="newTodo.name" />
            <label class="formLabel">DETAILS</label>
            <textarea row="10" class="textInfo" v-model="newTodo.description"></textarea>
            <button @click.prevent="updateTodo" class="formBtn">
                Update Project
            </button>
        </form>
    </div>
</div>
</template>

<script>
import {
    todoMixin
} from "../components/todoMixin";
export default {
    name: "viewProject",
    mixins: [todoMixin],

    data() {
        return {
            status: "all",
            showForm: false,

        };
    },

    computed: {
        filteredTodos() {
            if (this.todos.length === 0)
                return [];
            if (this.status === "all") {
                return this.todos;
            } else if (this.status === "completed") {
                return this.todos.filter((todo) => todo.isComplete);
            } else {
                return this.todos.filter((todo) => !todo.isComplete);
            }
        },
    },

    methods: {
        viewAll() {
            this.status = "all";
        },
        completed() {
            this.status = "completed";
        },
        ongoing() {
            this.status = "ongoing";
        },

        taskCheck(key) {
            this.todos[key].isComplete = !this.todos[key].isComplete;
        },
        deleteTask(key) {
            if (this.todos.length === 1 && this.todos[0].id === key) {
                // set filter option to disabled,
            } else {
                this.todos = this.todos.filter((todo) => todo.id != key);
            }
        },

        updateTask(key) {
            this.showForm = true;
            this.newTodo.id = key;
            this.newTodo.name = this.todos[key].name;
            this.newTodo.description = this.todos[key].description;
            this.newTodo.isComplete = this.todos[key].isComplete;

        },

        updateTodo(key) {
            this.showForm = false;
            key = this.newTodo.id;
            this.todos[key].name = this.newTodo.name;
            this.todos[key].description = this.newTodo.description;
        },
    },
};
</script>

<style scoped>


.viewBtn {
    padding: 10px;
    color: white;
    background-color: blue;
    margin-right: 10px;
    border-radius: 5px;
}

.completeBtn {
    padding: 10px;
    color: white;
    background-color: blue;
    margin-right: 10px;
    border-radius: 5px;
}

.ongoingBtn {
    padding: 10px;
    color: white;
    background-color: blue;
    margin-right: 10px;
    border-radius: 5px;
}

.todoHead {
    font-size: 18px;
}

.todoPara {
    font-size: 22px;
}

.wrap {
    border: 8px solid grey;
    margin-top: 10px;
    width: 80%;
    margin: 5px auto;
}

.viewproject {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}

.icon {
    font-size: 30px;
    color: #959da1;
    margin-right: 70px;
    float: right;
}

.font-icon {
    margin-top: 40px;
}

.i {
    cursor: pointer;
}

.formWrapper {
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

.comp {
    background-color: green;
}

.incomp {
    background-color: crimson;
}

.iconComp {
    color: green;
}

.iconIncomp {
    color: crimson;
}

.border-1 {
    width: 7px;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.border-2 {
    width: 8px;
    height: 105%;
    border-bottom-left-radius: 5px;
    margin-top: -5px;
}
</style>
