
/**
    SO SERVER INITIALIZATION
**/

    //@ Load the lightly configured express application globally 
    Object.assign( global, require(path.join(__dirname,"app.es6")) );

    //@ Instantiate a global copy of the server with the configured express application
    Object.assign(global,{server: http.createServer(app)});

    //@ Make available a global method that instantiates and returns a basic https express application
    Object.assign( global, { ssl_server : ssl_config => https.createServer(ssl_config, app) });
    
    //@ Instantiate a socket.io instance on the basic server instance
    Object.assign( global, { io : socket.listen(server) });

/**
    EO SERVER INITIALIZATION
**/
