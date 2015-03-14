var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  commenter: String,
  comment: String,
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }

});

mongoose.model('Comment', CommentSchema);