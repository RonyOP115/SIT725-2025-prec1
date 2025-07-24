const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
];

app.get("/api/quotes", (req, res) => {
    res.json({ quotes});
});

app.post("/api/quotes", (req, res) => {
    const { quote } = req.body;

    if (!quote || typeof quote !== "string") {
        return res.status(400).json({ error: "Missing or Invalid quote field/format." });
    }

    quotes.push(quote);

    res.status(201).json({
        messege: "Quote added successfully.",
        quote: quote,
    });
});

//Task 2 Calculator Task
app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    const result = num1 + num2;
    res.json({ result });
});

app.post("/add", (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    const result = num1 + num2;
    res.json({ result});
});

app.get("/calc", (req, res) => {
    const { num1, num2, op } = req.query;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    let result;
    switch(op) {
        case "add":
            result = n1 + n2;
            break;
        case "sub":
            result = n1 - n2;
            break;
        case "mul":
            result = n1 * n2;
            break;
        case "div":
            if (n2 === 0) {
                return res.status(400).json({ error: "Division by zero is not allowed." });
            }
            result = n1 / n2;
            break;    
        default:
            return res.status(400).json({ error: "Invalid operation. Use add, sub, mul, or div." });
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");

});