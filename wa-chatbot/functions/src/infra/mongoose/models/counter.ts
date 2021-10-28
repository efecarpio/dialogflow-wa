/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Schema,
  model,
} from "mongoose";

const counterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

counterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const counterModel = model("Counter", counterSchema);

export function autoIncrementModelID(
    modelName: any, doc: any, field: string, next: any
) {
  counterModel.findByIdAndUpdate(
      modelName,
      { $inc: { seq: 1 } },
      { new: true, upsert: true },
      function(error, counter) {
        if (error) return next(error);
        doc[field] = counter.seq;
        next();
      }
  );
}

export async function sequenceModelID(modelName: any): Promise<any> {
  const counter = await counterModel.findById(modelName).exec();
  return counter.seq;
}

export function autoIncrementModel(
    modelName: any, seq: number
): void {
  counterModel.findById(modelName, function(err, doc) {
    if (err) throw err;
    doc.seq = seq;
    doc.save();
  });
  /* counterModel.findByIdAndUpdate(
      modelName,
      { seq: seq },
      { new: true, upsert: true },
  );*/
}
