import mangoose from "mangoose";

const subTodoSchema = new mangoose.Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamp: true,
  }
);

export const SubTodo = mangoose.model("SubTodo", subTodoSchema);
