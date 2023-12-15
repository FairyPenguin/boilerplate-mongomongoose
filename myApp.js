// const { Mongoose } = require("mongoose");
require("dotenv").config();
const mongoose = require("mongoose");

//connect to mongoose

mongoose.connect(process.env.MONGO_URI, {
  dbName: "fcc",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("connected", () => {
  console.log("MongoDB Connected!");
});

// if (mongoose.connection.readyState === 1) {
//   console.log("Connected to MongoDB");
// }

let Person;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    default: 0,
  },

  favoriteFoods: [String],
});

Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const someOne = new Person({
    name: "John",
    age: 30,
    favoriteFoods: ["pizza", "hamburger"],
  });

  // try {
  //   await someOne.save();
  //   console.log("Document created successfully!");
  // } catch (error) {
  //   console.log(error);
  //   if (error) return done(error);
  // }
  someOne.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

arrayOfPeople = [
  { name: "Frankie", age: 74, favoriteFoods: ["Del Taco"] },
  { name: "Sol", age: 76, favoriteFoods: ["roast chicken"] },
  { name: "Robert", age: 78, favoriteFoods: ["wine"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, data) {
    if (err) return console.error(err);

    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
