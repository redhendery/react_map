const Hapi = require('hapi');

// Create server
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Index route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Server start
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
