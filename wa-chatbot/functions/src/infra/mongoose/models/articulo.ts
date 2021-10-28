import {
  Schema,
  model,
} from "mongoose";

const Articulo = new Schema({
  codart: {
    type: Number,
    required: true,
    index: true,
  },
  descrip: {
    type: String,
    required: true,
    lowercase: true,
  },
  valor: {
    type: Number,
  },
  resto: {
    type: Number,
  },
  unipaq: {
    type: Number,
  },
  unidmin: {
    type: Number,
  },
  peso: {
    type: Number,
  },
  codprecan: {
    type: String,
  },
  codpreres: {
    type: String,
  },
  factor: {
    type: Number,
  },
});

export default model("Articulo", Articulo);
