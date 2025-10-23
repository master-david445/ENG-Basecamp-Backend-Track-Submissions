import http from 'http';
const PORT = 3000;

const server = http.createServer((req, res) => {
res.write('Name: My  name is David Macaulay and I loveeee engineering hehe, Role: Backend Developer AKA Wizard Node in training, Meassage:  Lets gooooooo, Happy to build my first API');
res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});