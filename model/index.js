const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Schema.Types.ObjectId;

const indexSchema = new Schema({
    filename: String,
    content: String,
    // userId: { type: ObjectId, ref: 'user' }, 链接到 user 数据库
},{timestamps: true})

const Index = mongoose.model('index', indexSchema)

module.exports = Index