const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/index");

const peelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    size: {
      type: String,
      required: [true, "Set size for product"],
    },
    prise: {
      type: String,
      required: [true, "Set prise for product"],
    },
  },
  { versionKey: false }
);

peelSchema.post("save", handleMongooseError);

const Peel = model("peel", peelSchema);

module.exports = { Peel };
