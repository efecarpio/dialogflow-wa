import {
  Schema,
  model,
} from "mongoose";

/**
 * Stock de productos
 * @export
 * @const Stock
 */
const Stock = new Schema({
  stock: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  articulo: {
    codart: Number,
    descrip: String,
    resto: Number,
    peso: Number,
    valor: Number,
  },
});

export default model("Stock", Stock);
