const controller = require('controller')

module.exports = (routes) => {
    routes.get('/hello_world', controller.messageController);
}