export const todoMixin = {
  data() {
    return {
      todos: [
        {
          name: "Create new homepage banner",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing.",
          isComplete: true,
          showDes: false,
          id: 1,
        },
        {
          name: "Make marketing email",
                    description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing.",
          isComplete: false,
          showDes: false,
          id: 2,
        },
        {
          name: "Update promo links",
                    description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing.",
          isComplete: true,
          showDes: false,
          id: 3,
        },
        {
          name: "Make QR code",
                    description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tenetur fugit voluptates reiciendis nemo ullam, illum eaque veritatis maiores nobis.Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing.",
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
