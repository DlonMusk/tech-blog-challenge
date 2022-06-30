// import router and models
const router = require('express').Router();
const { Post, Comment } = require('../../models/indexs');

// route to add a new post
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

// route to add a new comment
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
});

// route to update current users post
router.put('/update', async (req, res) => {
    try{
        const toBeupdated = await Post.findByPk(req.body.postId);

        const updatedPost = await toBeupdated.update({
            content: req.body.content,
            date_created: Date.now()
        });

        req.session.save(() => {
            res.status(200).json(updatedPost);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to delete one of the current users posts
router.delete('/delete', async (req, res) => {
    try{
        const toBeDeleted = await Post.findByPk(req.body.postId);
        const destroyed = await toBeDeleted.destroy();

        req.session.save(() => {
            res.status(200).json(destroyed);
        })
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;