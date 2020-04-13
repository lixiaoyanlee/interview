const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html')
  response.writeHead(200, {
    'Content-Type': 'text/html',
    // 当没有content-type的时候，会去预测是什么类型，导致运行失败，这个是为了告诉，不要随意预测,容易被攻击
    // 'X-Content-Options': 'nosniff'
    'Content-Encoding': 'gzip'
  })
  response.end(zlib.gzipSync(html))
}).listen(8888)

console.log('server listening on 8888')