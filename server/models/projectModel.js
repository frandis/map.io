const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  technologies: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
