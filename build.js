const fs = require("fs")
console.log("start...");

setTimeout(()=>{
fs.writeFileSync("post.html",`<html>
  <head></head>
  <body>
    <h1>WORK!!!</h1>
    <h2>
      ${new Date()}
    </h2>
  </body>

</html>`)
console.log("done");

},1000 * 3)
