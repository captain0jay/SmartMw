const mongoose = require('mongoose');
const { Schema } = mongoose;

const clusterSchema = new Schema({
  clustername: { type: String },
  accesst: { type: String},
  clusterlink: { type: String },
  pagelink: { type: String },
});

const clusterModel = mongoose.model('Cluster',clusterSchema)
module.exports = clusterModel;