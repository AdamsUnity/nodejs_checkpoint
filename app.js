const fs = require("fs");
const http = require("http");
const { Buffer } = require("node:buffer");
const nodemailer = require("nodemailer");
const generator = require("generate-password");

// creating erver
const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Hello Node!!!!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
// creating a file called welcome.txt with fs
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("Hello Node");
});

//create a programme that reads console.log data from hello.txt file
fs.readFile("hello.txt", (err, data) => {
  if (err) throw err;
  const dataStr = data.toString("utf8");
  console.log(dataStr);
});

// create password generator file
fs.writeFile("password-generator", "", (err) => {
  if (err) throw err;
  console.log("passowrd-generator file has been created.");
});

// function that create random password
function randomPassword() {
  const password = generator.generate({
    length: 5,
    numbers: true,
  });
  console.log(password);
}

randomPassword();

// Task 5- create a file named email-sender
fs.writeFile("email-sender", "", (err) => {
  if (err) throw err;
});

// Sending email to myself
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "myemail@gmail.com",
    pass: "",
  },
});

var mailOptions = {
  from: "myemail@gmail.com",
  to: "myemail@gmail.com",
  subject: "Sending Email using Node.js",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
