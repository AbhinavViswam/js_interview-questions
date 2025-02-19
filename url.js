const url = require("url")
const address = "https://www.youtube.com/watch?v=j6jWMxlquEI"

const urls = url.parse(address)

console.log(urls.host);
console.log(urls.path);