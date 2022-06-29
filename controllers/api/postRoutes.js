const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/addPost', async (req, res) => {
    try{
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });


        req.session.save(() => {
            res.status(200).json(newPost);
        })
    } catch (err) {
        res.status(500).json(err);
    }
    
});


router.post('/comment', async (req, res) => {
    try{
        const newComment = await Comment.create({
            content: req.body.comment,
            post_id: req.body.postId,
            user_id: req.session.user_id
        });

        req.session.save(() => {
            res.status(200).json(newComment);
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;