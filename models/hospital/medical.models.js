import mongooes from 'mongoose';

const medicalSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      requried: True,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Medical = mongooes.model('Medical', userSchema);
