import mongooes from 'mongoose';

const subtodoSchema = new mongooes.Schema(
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
  },
  { timestamps: true }
);

export const SubTodo = mongooes.model('SubTodo', subtodoSchema);
