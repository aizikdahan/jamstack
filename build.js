const fs = require("fs")


setTimeout(()=>{
fs.writeFileSync("post.html",`<html>
  <head></head>
  <body>
    <h1>WORK!!!!</h1>
    <h2>
      ${new Date()}
    </h2>
  </body>

</html>`)
console.log("done");

},1000 * 300)
