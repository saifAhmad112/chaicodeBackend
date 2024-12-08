import mangoose from "mangoose";
const todo = new mangoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodo: [
      {
        type: mangooseSchema.type.ObjectId,
        ref: "SubTodo",
      },
    ], // array of sub todo
  },
  {
    timestams: true,
  }
);
