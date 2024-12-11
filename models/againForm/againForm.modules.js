const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the AgainForm schema
const againFormSchema = new Schema(
  {
    title: {
      type: String,
      default: "null",
    },
    lastName: {
      type: String,
      default: "null",
    },
    email: {
      type: String,
      default: "null",
    },
    number: {
      type: Number,
      default: null,
    },
    enumArrray: {
      type: [String],
      enum: [], // Add allowable values dynamically if needed
      default: null,
    },
    other: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Form',  // Reference to Form collection
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('AgainForm', againFormSchema);
