const controller = require('controller.js')

module.exports = (routes) => {
    routes.get('/hello_world', controller.messageController);
}