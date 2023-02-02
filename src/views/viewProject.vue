<template>
<div class="viewAllProject">
    <div class="allBtn">
        <button @click.prevent="viewAll" class="viewBtn">VIEW ALL</button>
        <button @click.prevent="completed" class="viewBtn">COMPLETED</button>
        <button @click.prevent="ongoing" class="viewBtn">ONGOING</button>

    </div>
    <div v-for="todo in filteredTodos" :key="todo.id" class="wrap">
        <h1 class="todoHead">{{todo.name}}</h1>
        <p>{{todo.description}}</p>

        <div class="icon" @click="deleteTask(todo.id)">
            <i class="fa-solid fa-trash"></i>
        </div>
        <div class="icon" @click="updateTask(filteredTodos.indexOf(todo))">
            <i class="fa-sharp fa-solid fa-pen"></i>
        </div>
        <div class="icon" :class="todo.isComplete ? 'iconComp' : 'iconIncomp'" @click="taskCheck(filteredTodos.indexOf(todo))">
            <i class="fa-solid fa-check"></i>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "viewProject",
    data() {
        return {

            todos: [{
                    name: "todo-tracker",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
                    isComplete: true,
                    showDes: false,
                    id: 1,
                },
                {
                    name: "todo-tracker2",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
                    isComplete: false,
                    showDes: false,
                    id: 2,
                },
                {
                    name: "todo-tracker3",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
                    isComplete: true,
                    showDes: false,
                    id: 3,
                },
                {
                    name: "todo-tracker4",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
                    isComplete: false,
                    showDes: false,
                    id: 4,
                },

            ],
            status: "all",
        };
    },
    computed: {
        filteredTodos() {
            if (this.status === "all") {
                return this.todos;
            } else if (this.status === "completed") {
                return this.todos.filter(todo => todo.isComplete);
            } else {
                return this.todos.filter(todo => !todo.isComplete);
            }
        }
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

        // taskCheck(key) {

        //     this.todos[key].isComplete = !this.todos[key].isComplete
        //     localStorage.setItem("todoss", JSON.stringify(this.todos));
        // },
        // deleteTask(key) {
        //     this.todos = this.todos.filter((todo) => todo.id != key);
        //     this.todos = this.todos.filter((todo) => todo.id != key);
        //     localStorage.setItem("todoss", JSON.stringify(this.todos));
        // },
        // updateTask(key) {
        //     this.newTodo.name = this.todos[key].name;
        //     this.newTodo.description = this.todos[key].description;
        //     this.showForm = true;
        //     this.newTodo.id = key;
        //     this.newTodo.isComplete = this.todos[key].isComplete;
        // },
    }
};
</script>

<style scoped>
.viewBtn {
    padding: 10px;

}

.todoHead {
    background-color: white;
}

.wrap {
    border: 2px solid grey;
    margin-top: 5px;
}

.icon {
    font-size: 30px;
    color: #959da1;
    margin-right: 70px;
}

.iconComp {
    color: green;
}

.iconIncomp {
    color: crimson;
}

.i {
    cursor: pointer;
}
</style>
