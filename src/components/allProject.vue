<template>
<div class="todoWrapper" v-show="!showForm">
    <div v-for="todo in todos" :key="todo.id" class="wrap">
        <div class="todoCol" v-show="!showForm">
            <div class="line" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
            <h1 class="todoHead" @click="showDescription(todos.indexOf(todo))">
                {{ todo.name }}
            </h1>
            <div class="icon" @click="deleteTask(todo.id)">
                <i class="fa-solid fa-trash"></i>
            </div>
            <div class="icon" @click="updateTask(todos.indexOf(todo))">
                <i class="fa-sharp fa-solid fa-pen"></i>
            </div>
            <div class="icon" :class="todo.isComplete ? 'iconComp' : 'iconIncomp'" @click="taskCheck(todos.indexOf(todo))">
                <i class="fa-solid fa-check"></i>
            </div>
        </div>
        <div class="todoCol" v-if="todo.showDes">
            <div class="line1" :class="todo.isComplete ? 'comp' : 'incomp'"></div>
            <div class="desc">
                <p class="todoInfo">{{ todo.description }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            showForm: "false",
            todo: "",
            newTodos: "",
            todos: ""
        }
    }
}
methods: {
    showDescription(index);
    {
        this.todos[index].showDes = !this.todos[index].showDes;
    }
    deleteTask(id);{
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    updateTask(index); {
        // code to update task
    }
    taskCheck(index) ;{
        this.todos[index].isComplete = !this.todos[index].isComplete;
    }
}
</script>

<style>
.todoWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wrap {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
}

.todoCol {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

.line {
    width: 100%;
    height: 3px;
    background-color: gray;
    margin-bottom: 10px;
}

.comp {
    background-color: green;
}

.incomp {
    background-color: red;
}
</style>
