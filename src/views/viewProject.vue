<template>
<div class="projectContainer">
    <div class="viewproject" v-show="!showForm">
        <div class="allLink">
            <a @click.prevent="viewAll" class="viewLink">VIEW ALL</a>
            <a @click.prevent="completed" class="completeLink">COMPLETED</a>
            <a @click.prevent="ongoing" class="ongoingLink">ONGOING</a>
        </div>

        <div v-for="todo in filteredTodos" :key="todo.id" class="wrap" :class="todo.isComplete ? 'comp' : 'incomp'">
            <div class="wrap-header-component">
                <h1 class="todoHead" @click="showDescription(filteredTodos.indexOf(todo))">
                    {{ todo.name }}
                </h1>

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
            </div>
            <p v-if="todo.showDescription" class="todoPara">
                {{ todo.description }}
            </p>
        </div>
    </div>

    <div class="formWrapper" v-show="showForm">
        <form class="form">
            <label class="formLabel">TITLE</label>
            <input type="text" class="inputInfo" v-model="newTodo.name" />
            <label class="formLabel">DETAILS</label>
            <textarea row="10" class="textInfo" v-model="newTodo.description"></textarea>
            <label class=" validateError">{{ error }}</label>
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
            error: ""
        };
    },

    mounted() {
        if (localStorage.getItem("todos")) {
            this.todos = JSON.parse(localStorage.getItem("todos"));
        }
    },

    computed: {
        filteredTodos() {
            if (this.todos.length === 0) return [];
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

        showDescription(key) {
            this.todos[key].showDescription = !this.todos[key].showDescription;

        },

        taskCheck(key) {
            this.todos[key].isComplete = !this.todos[key].isComplete;
            localStorage.setItem("todos", JSON.stringify(this.todos));
        },
        deleteTask(key) {
            if (this.todos.length === 1 && this.todos[0].id === key) {
                // set filter option to disabled,
            } else {
                this.todos = this.todos.filter((todo) => todo.id != key);
            }
            localStorage.setItem("todos", JSON.stringify(this.todos));
        },

        updateTask(key) {

            this.showForm = true;
            this.newTodo.id = key;
            this.newTodo.name = this.todos[key].name;
            this.newTodo.description = this.todos[key].description;
            this.newTodo.isComplete = this.todos[key].isComplete;
        },
        updateTodo(key) {
            if (!this.newTodo.name) {
                this.error = 'Project title cannot be empty'
                return
            }
            if (!this.newTodo.description) {
                this.error = 'Project description cannot be empty'
                return
            } else {
                this.error = ''
                this.showForm = false;
                key = this.newTodo.id;
                this.todos[key].name = this.newTodo.name;
                this.todos[key].description = this.newTodo.description;
                localStorage.setItem("todos", JSON.stringify(this.todos));
            }
        }

    },

}
</script>

<style scoped>
.allLink {
    padding-bottom: 10px;

}

.validateError {
    color: red;
    font-size: 18px;
    margin-top: 10px;
    font-family: arial;

}

.viewLink {
    padding: 8px;
    color: #a09e9b;
    float: left;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    margin-left: 9%;
    font-weight: bold;
}

.completeLink {
    padding: 8px;
    color: #a09e9b;
    float: left;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    font-weight: bold;
}

.ongoingLink {
    padding: 8px;
    color: #a09e9b;
    float: left;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    font-weight: bold;
}
.viewLink:active{
    color:black;
}

.completeLink:active {
    color: black;
}

.ongoingLink:active{
    color: black;
}


.todoHead {
    font-size: 18px;
    float: left;
    margin-left: 25px;
    margin-top: 27px;
    font-weight: bolder;
    color: black
}

.todoPara {
    font-size: 17px;
    margin-right: 15px;
    padding: 15px;
}

.wrap {
    background-color: white;
    margin-top: 10px;
    width: 80%;
    margin: 5px auto;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    border-left: 4px solid #fff;
    min-height: 70px;
}

.wrap.comp {
    border-color: green;
}

.wrap.incomp {
    border-color: red;
}

.wrap .wrap-header-component {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.viewproject {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}

.icon {
    font-size: 19px;
    color: #959da1;
    float: right;
}

.font-icon {
    margin: 0 1rem;
}

.font-icon i {
    padding: 8px;
    margin-top: 25px
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

    width: 130px;
    height: 30px;
    align-items: center;
    margin-left: 41%;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 7px;
    border: none;
    background-color:#00b587;
    color: whitesmoke;
    font-size: 17px;
}

.iconComp {
    color: green;
}

.iconIncomp {
    color: crimson;
}

.border-1 {
    width: 10px;
    height: 90px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.border-2 {
    width: 8px;
    height: 90px;
    border-bottom-left-radius: 5px;
    margin-top: -5px;
}
</style>
