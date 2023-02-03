export const todoMixin = {
  data() {
    return {
      todos: [
        {
          name: "Todo-tracker1",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: true,
          showDes: false,
          id: 1,
        },
        {
          name: "Todo-tracker2",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: false,
          showDes: false,
          id: 2,
        },
        {
          name: "Todo-tracker3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: true,
          showDes: false,
          id: 3,
        },
        {
          name: "Todo-tracker4",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.",
          isComplete: false,
          showDes: false,
          id: 4,
        },
      ],
      newTodo: {
        name: '',
        description: '',
        isComplete: false,
        showDes: false,
        id: ''
      },
    };
  },
};
