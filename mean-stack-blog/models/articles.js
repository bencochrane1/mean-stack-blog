var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  subtitle: String,
  imageurl: String,
  readtime: Number,
  recommends: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Article', ArticleSchema);