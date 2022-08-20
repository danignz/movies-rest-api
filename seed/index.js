require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

// Add the model and array you want to seed

const movies = [
  {
    title: "Spiderman",
    year: 2002,
    director: "Juan Garcia",
    duration: 105,
    synopsis: "Synopsis of the movie",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOBcyDhrx9z8JNgX2zKuQ3JW4K_Gm0KIoBTK8E4aimA&s",
  },
  {
    title: "Conan",
    year: 206,
    director: "David Perez",
    duration: 99,
    synopsis: "Synopsis of the movie",
    image: "https://i.ytimg.com/vi/DG2oeBy5dDY/maxresdefault.jpg",
  },
  {
    title: "Jurassic Park",
    year: 167,
    director: "Laura Perez",
    duration: 150,
    synopsis: "Synopsis of the movie",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_JurassicWorldEvolution2_FrontierDevelopments_S1_2560x1440-4103be22950c498c9687d9457d9e0815",
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
