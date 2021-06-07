require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Hiccup",
    age: 20,
    favoriteFoods: ["meat", "fish"],
  });
  person.save(function (err, data) {
    if (err) return console.error(err);
    console.log(data);
    done(null, data);
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
  Person.find({ name: personName }, function (err, docs) {
    if (err) return console.log(err);
    console.log(docs);
    done(null, docs);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, doc) {
    if (err) return console.log(err);
    console.log(doc);
    done(null, doc);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, function (err, doc) {
    if (err) return console.log(err);
    console.log(doc);
    done(null, doc);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);

    person.save((err, updatedPerson) => {
      if (err) return console.log(err);
      console.log(updatedPerson);
      done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true },
    function (err, updatedDoc) {
      if (err) return console.log(err);
      console.log(updatedDoc);
      done(null, updatedDoc);
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove({ _id: personId }, function (err, removedDoc) {
    if (err) return console.log(err);
    console.log(removedDoc);
    done(null, removedDoc);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove }, function (err, result) {
    if (err) return console.log(err);
    console.log(result);
    done(null, result);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.sort({ name: -1 })
    .find({ favoriteFoods: foodToSearch })
    .limit(5)
    .select({ favoriteFoods: 0 })
    .exec(function (error, people) {
      if (err) return console.log(err);
      console.log(people);
      done(null, people);
    });
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
