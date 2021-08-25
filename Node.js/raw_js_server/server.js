const http = require('http')
const fs = require('fs')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)  // Possible vaules: req, req.rawHeaders
    // Set header content-type
    res.setHeader('Content-Type', 'text/html')


    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break
        case '/test':
            // Redirect to new location
            res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404;
            break
    }

    // Send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.write(data) // Will be send second
            res.end() // End send
        }
    })
    // res.write('Hello test test test') // Will be sent first
})

const listen = server.listen(port, hostname, () => {
    console.log(`Server is working on ${hostname}:${port}`)
})