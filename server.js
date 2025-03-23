const http = require("http");
// const express = require("express");

let controller = (req,res) => {
    res.send("Hello World");
};

let books = [
    {
        id: 1,
        name: "HTML & CSS",
        price:"400",
    },
    {
        id: 2,
        name: "Java",
        price:"500",
    },
    {
        id: 3,
        name: "python",
        price:"700",
    },
]

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url.includes("welcome")) {
        res.statusCode = 200;
        res.write("Welcome to My Server");
    } else if(req.url.includes("books")) {
        res.statusCode = 200;
        res.write(JSON.stringify(books));
    } else {
        res.statusCode = 404;
        res.write("Page Not Found");
    }
    res.end();
    server.listen(5000, () => {
        console.log("Server is running on port 3000");
    });
    
}); 