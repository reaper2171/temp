//Also a built-in module

const http = require('http');

const server = http.createServer((req, res) => {   //we could have used other name for parameters too, but first = request second = response role is fixed
    // res.write('Hello from the other world');
    // res.end();

    if(req.url === '/'){
        res.end('Hello to the server');
    }
    else if(req.url === '/about'){
        res.end('Here is the info about the server');
    }
    else{
        res.end(`
        <h1>Hello there</h1>
        <p>Looks like you're a little lost buddy</p>
        <a href='/'>Back Home</a>
        `)
    }
})

server.listen(5000);