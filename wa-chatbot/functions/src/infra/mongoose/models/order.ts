/* eslint-disable no-invalid-this */
import {
  Schema,
  model,
} from "mongoose";
import {
  autoIncrementModelID,
  sequenceModelID,
  autoIncrementModel,
} from "./counter";

const Order = new Schema({
  codord: {
    type: Number,
    required: true,
    index: true,
  },
  articulo: {
    codart: Number,
    descrip: String,
    valor: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
  },
});

Order.pre("save", function(next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID("orders", this, "codord", next);
});

Order.pre("insertMany", async function(next, docs) {
  let seq = await sequenceModelID("orders");
  const count = 1;

  docs.map(function(doc) {
    if (doc.codord !== 0) {
      next();
      return;
    }
    seq += count;
    doc.codord = seq;
  });
  autoIncrementModel("orders", seq);
});

export default model("Order", Order);
