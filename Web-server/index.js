import express from "express";

const app = express();
const port = 2000;

app.get("/home", (req, res) => {
    res.status(200).send("<h1>Welcome to the Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.status(200).send("<h3>About Us</h3>");
});

app.get("/services", (req, res) => {
    res.status(200).send("<h3>Our Services</h3>");
});

app.get("/contact", (req, res) => {
    res.status(200).send("<h1>Thank you for contacting us</h1>");
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
