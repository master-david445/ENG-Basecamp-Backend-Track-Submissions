# 🧾 Backend Task – Basic Node.js Server

This project is a simple Node.js HTTP server that returns my **name** and **role** when accessed in the browser.  
It was created as part of a backend assignment.

---

##  Description

The server is built using Node.js’ built-in `http` module.  
When the server runs, visiting the root URL (`http://localhost:3000`) responds with plain text containing the developer’s name and role.

---

##  Code

```javascript
import http from 'http';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write('Name: Oreoluwa David Macaulay\nRole: Backend Developer');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});```


---



## What I Learned

**Through this task, I learned:

How to create a simple web server using Node.js’ built-in http module.

How server ports work and how to make the server listen for incoming requests.

How to send plain text responses to the browser.

The basic flow of backend request and response handling in Node.js.

How to debug and test a running Node.js server in a development environment like GitHub Codespaces.**
