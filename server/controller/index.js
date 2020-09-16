const post = require('./post');
const user = require('./user');
//am trying to export the post and user in the controller folder after requiring it 
//in the index.js
module.exports = {
    post,
    user
}