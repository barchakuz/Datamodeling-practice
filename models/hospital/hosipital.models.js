import mongooes from 'mongoose';

const hospitalSchema = new mongooes.Schema(
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

export const Hospital = mongooes.model('Hospital', userSchema);
