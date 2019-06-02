/**
 * The "mock-backend" entry setup file used to run node instance.
 */

import signinPost from './routes/signin/signin-post';

const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const PORT = 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});

// Add custom endpoint implementation before loading "db.json" file.
server.post('/signin', signinPost);

/*
Custom routes mapping. For example:
Given: '/api/*': '/$1'
Result: GET http://localhost:3000/api/employees -> http://localhost:3000/employees
*/
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}));

// Use default router from "db.json" file.
server.use(router);

// Start server at specific port:
server.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}/`);
});
