const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    firstName: {
      type: String,
      default:"null"
    },
    lastName: {
      type: String,
       default:"null"
    },
    email: {
      type: String,
       default:"null"
    },
    number: {
      type: Number,
       default:"null"
    },
  },
  {
    timestamps: true,
  }
);



// export const Form = mongoose.model("Form", formSchema);
module.exports = mongoose.model("Form", formSchema);
