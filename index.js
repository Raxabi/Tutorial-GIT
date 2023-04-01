import { createServer } from "node:http"

createServer((req, res) => {
    console.log(res.statusCode)
    res.end("<h1>Hello World!</h1>")
}).listen(5000)