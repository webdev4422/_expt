const http = require('http')
const fs = require('fs')

const hostname = '0.0.0.0'
const port = 80

const server = http.createServer((req, res) => {
  // Log request
  console.log(req.url) // console.log(req);

  // Set response header content type
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html') // 'text/palin' for text only
  // Alternative response header: res.writeHead(200, { 'Content-Type': 'text/html' })
  // Send response text
  res.write('<h1>Greetings, my friend!</h1>')
  // Send response html file
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.write(data)
    }
    res.end()
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})