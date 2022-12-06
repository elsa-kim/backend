//  @ts-check

const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'mongoose-board',
  },
);

// module.exports = mongoose.model('Board', boardSchema);
