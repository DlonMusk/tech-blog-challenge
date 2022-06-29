const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/addPost', async (req, res) => {

    try{
        console.log("Title: ", req.body.title);
        console.log("Content: ", req.body.content);
        console.log("user_id: ", req.session.user_id);
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });

        console.log("NEWPOST: ", newPost);

        req.session.save(() => {
            res.status(200).json(newPost);
        })
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;