// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// link models
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User);

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post);

// export models
module.exports = { User, Post, Comment };