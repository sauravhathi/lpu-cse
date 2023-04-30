// Question -> create input and submit button where user can enter the odd and even numbers
// when the number is entered , it should display Even and Odd in the Browser in new page
// and side by side output should be saved in a file created automatically

const express = require("express");

const app = express();

app.use(express.urlencoded());
const fs = require("fs");

app.get("/", function (req, res) {
  res.send(`
<form method="POST" action="/msg">
<input type="number" name="numbers" />
<input type="submit" name="submit_button" />

</form>

`);
});
app.post("/msg", function (req, res) {
  if (parseInt(req.body.numbers) % 2 == 0) {
    res.send("even number");
    fs.writeFileSync("result.txt", "even number");
  } else {
    res.send("odd number");
    fs.writeFileSync("result.txt", "odd number");
  }
});
app.listen(3001);

// new file result.txt will be created with the output.
