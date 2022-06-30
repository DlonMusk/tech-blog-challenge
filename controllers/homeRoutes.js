const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// home page I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
router.get('/', async (req, res) => {
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
            username: req.session.username,
            logged_in: req.session.logged_in
        })
    }
    catch (err) {
        res.status(500).json(err);
    }

});

// render login page
router.get('/login', (req, res) => {

    res.render('login');
});

// render signup page
router.get('/signup', (req, res) => {
 
    res.render('signup');
})


// render dashboard with current users posts
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{model: Post}]
        });

        
        const user = userData.get({plain: true});

        res.render('dashboard', {
            user,
            username: req.session.username,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// render new blog post submission screen
router.get('/newBlogPost', withAuth, (req, res) => {
    res.render('newBlogPost');
})

// render comment section of clicked post
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
            username: req.session.username,
            logged_in: req.session.logged_in});

    } catch (err) {
        res.status(500).json(err);
    }
})

// render the add comment screen
router.get('/addComment/:id', withAuth, (req, res) => {
    res.render('addComment', {
        logged_in: req.session.logged_in,
        username: req.session.username,
        post_id: req.params.id
    });
});

// render the update and remove screen of a clicked on post
router.get('/updateRemovePost/:id', withAuth, async (req, res) => {
    try {

        const postData = await Post.findByPk(req.params.id, {
            include: [{model: User}]
        });

        const post = postData.get({plain: true});


        res.render('updateRemovePost', {
            post,
            username: req.session.username,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err)
    }
    
    
})




module.exports = router;