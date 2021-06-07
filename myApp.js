require("dotenv").config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// Schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age : Number,
  favoriteFoods : [String]
});

let Person = mongoose.model('Person', personSchema);;

const createAndSavePerson = (done) => {
  const person = new Person({ name : 'Hiccup', age : 20, favoriteFoods : ['meat', 'fish']})
  person.save(function(err, data) {
    if (err) return console.error(err);
    console.log(data);
    done(null, data)
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  const manyPeople = Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    console.log(people);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name : personName}, function (err, docs) {
    if(err) return console.log(err);
    console.log(docs);
    done(null , docs);
  })
  
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
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
