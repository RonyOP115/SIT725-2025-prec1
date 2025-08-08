var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
    {
        title: "Image 2",
        image: "images/M5 CS.png",
        link: "About image 2",
        desciption: "A beautiful car parked in a garage",
    },
    {
        title: "Image 3",
        image: "images/Rony'sRolls.png",
        link: "About Image 3",
        desciption: "a preview of Rony's Future Rolls Royce",
    },
];
app.get("/api/projects", (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" });
});
var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB!");
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model("Project", ProjectSchema);

app.get("/api/projects", async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.listen(port, () => {
    console.log("App listening on port " + port);
});

const sampleProject = new Project({
    title: "Image 4",
    image: "images/porsche.png",
    link: "About Image 4",
    description: "A preview of Porsche's latest model",
});
sampleProject.save().then(() => console.log("Sample project saved!"));