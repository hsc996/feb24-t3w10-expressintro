// Import express
const express = require("express");

// Make an instance of the Express system
const app = express();

const PORT = 3000;

// When we receive a request on localhost:3000/ (GET)
app.get("/", (request, response) => {
    // response.send("<h1>Hello world</h1>"); // This is an example of server-side rendering (we will not be doing this)
    response.json({
        message: "Hello world"
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});

