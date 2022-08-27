require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

// Add the model and array you want to seed

const movies = [
  {
    title: "Spiderman",
    year: 2002,
    director: "Sam Raimi",
    duration: 105,
    synopsis:
      "Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil mani",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/spider-man-1627065947.jpeg",
  },
  {
    title: "Conan",
    year: 2006,
    director: "John Milius",
    duration: 99,
    synopsis:
      "Conan, who was sold into slavery when he was a kid, sets off to find the sorcerer responsible for the genocide of his family and people.",
    image: "https://i.ytimg.com/vi/DG2oeBy5dDY/maxresdefault.jpg",
  },
  {
    title: "Jurassic Park",
    year: 167,
    director: "Steven Spielberg",
    duration: 150,
    synopsis:
      "John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island's security system causes the creatures to escape and bring about chaos.",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JurassicWorldEvolution2_FrontierDevelopments_S1_2560x1440-4103be22950c498c9687d9457d9e0815",
  },
  {
    title: "Indiana Jones 3",
    year: 117,
    director: "Steven Spielberg",
    duration: 110,
    synopsis:
      "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
    image:
      "https://haltandcatchfire.de/wp-content/uploads/2020/05/storyrecap_indy4.jpg",
  },
];

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movie.create(movies);
  })
  .then(() => {
    console.log("Seed done 🌱");
  })
  .catch((e) => console.log(e))
  .finally(() => {
    console.log("Closing connection");
    mongoose.connection.close();
  });
