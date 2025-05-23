const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");
const TodoSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
    default: "pending",
  },
  ...commonSchema,
});

module.exports = model("Todo", TodoSchema);
