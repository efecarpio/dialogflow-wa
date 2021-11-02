/* eslint-disable no-invalid-this */
import {
  Schema,
  model,
} from "mongoose";
import {
  autoIncrementModelID,
} from "./counter";
import { IArticulo } from "../interfaces";

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

Articulo.pre("save", function(next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID("articulos", this, "codart", next);
});

export default model<IArticulo>("Articulo", Articulo);
