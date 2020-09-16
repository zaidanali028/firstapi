const userController = require('../controller').user;
const postController = require('../controller').post;
module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome To  My first Node Sequelize API (WORKING)"
        })
    })
//AM EXPORTING THE ROUTES SO THAT THE INDEX.JS CAN HAVE ACCESS TO ALL ITS METHODS. IE
//GET,POST,PUT

    //create,read,update,
    app.get('/api/users',userController.getAllUsers);
    //working

    app.post('/api/user/create',userController.create);
    //working
    app.get('/api/:userId/posts',postController.getAllPostsOfUser);
    //working
    app.post('/api/post/create',postController.createPost);
    //working

    app.put('/api/:postId',postController.update);
    //working


}