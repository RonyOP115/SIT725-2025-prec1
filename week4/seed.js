const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model("Project", ProjectSchema);

const sampleData = [
  {
    title: "Image 1",
    image: "images/cat.png",
    link: "About image 1",
    description: "a kitten sitting at a bench watching the sunset",
  },
  {
    title: "Image 2",
    image: "images/M5 CS.png",
    link: "About image 2",
    description: "A beautiful car parked in a garage",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));

// To run this script, use the command: node week4/seed.js
// Ensure MongoDB is running and the database 'myprojectDB' is created.
// This script will populate the database with sample project data.
// Adjust the sampleData array as needed for different projects.
const sampleProject = new Project({
  title: "Image 3",
  image: "images/Rony'sRolls.png",
  link: "About image 3",
  description: "A preview of Rony's Future Rolls Royce",
});
sampleProject.save().then(() => console.log("Sample projectsaved!"));