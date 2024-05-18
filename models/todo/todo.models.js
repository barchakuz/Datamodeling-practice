import mongooes from 'mongoose';

const todoSchema = new mongooes.Schema(
  {
    content: {
      type: String,
      requried: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodo: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongooes.model('Todo', todoSchema);
