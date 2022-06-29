const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// home page I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
router.get('/', async (req, res) => {
    console.log('IN FIRST GET')
    try{
        const postdb = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
    

        const posts = postdb.map(post => post.get({plain: true}))

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        })
    }
    catch (err) {
        res.status(500).json(err);
    }

});

// login
router.get('/login', (req, res) => {

    res.render('login');
});

router.get('/signup', (req, res) => {
 
    res.render('signup');
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{model: Post}]
        });

        

        const user = userData.get({plain: true});
        console.log(user);
        res.render('dashboard', {
            user,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/newBlogPost', withAuth, (req, res) => {
    res.render('newBlogPost');
})

router.get('/comments/:id', withAuth, async (req, res) => {
    try{
        const commentData = await Comment.findAll({
            where: {post_id: req.params.id},
            include: [{model: User}]
        });

        const postData = await Post.findByPk(req.params.id, {
            include: [{model: User}]
        });

        const post = postData.get({plain: true});
        const comments = commentData.map(comment => comment.get({plain: true}))

        res.render('post', {
            comments,
            post,
            logged_in: req.session.logged_in});

    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;