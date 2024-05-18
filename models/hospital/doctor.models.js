import mongooes from 'mongoose';

const doctorSchema = new mongooes.Schema(
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

export const Doctor = mongooes.model('Doctor', userSchema);
