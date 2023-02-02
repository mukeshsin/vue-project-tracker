export const todoData= {
  data() {
    return {
      todoList: [
        {
          name: "todo-tracker",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: true,
          showDes: false,
          id: 1,
        },
        {
          name: "todo-tracker2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: false,
          showDes: false,
          id: 2,
        },
        {
          name: "todo-tracker3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: true,
          showDes: false,
          id: 3,
        },
        {
          name: "todo-tracker4",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: false,
          showDes: false,
          id: 4,
        },
      ],

      newTodo: {
        name: "",
        description: "",
        isComplete: false,
        showDes: false,
        id: "",
      },
    };
  },
};
