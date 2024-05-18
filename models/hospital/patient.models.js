import mongooes from 'mongoose';

const userSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    hospital: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    hospital: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  },
  { timestamps: true }
);

export const User = mongooes.model('User', userSchema);
