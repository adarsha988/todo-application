const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;
const commonSchema = require("../../utils/commonSchema");
const SubtaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
    default: "pending",
  },
  todo: { type: ObjectId, ref: "Todo" },
  ...commonSchema,
});

module.exports = model("Subtask", SubtaskSchema);
