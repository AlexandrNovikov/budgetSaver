const { addIds } = require('./defaultData');
const Category = require('../models/Category');

const seedData = {

  seedDefaultCategories(userId) {
    let categories = addIds(userId);

    Category.collection.insertMany(categories, {forceServerObjectId: true}, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Categories inserted!')
      }
    });
  },
};

module.exports = seedData;
