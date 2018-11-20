const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park, tRex, diplo, centaur, pegasus, onionCat, cabbageDog;

  beforeEach(function () {
    tRex1 = new Dinosaur('tRex', 'grass', 5);
    tRex2 = new Dinosaur('tRex', 'grass', 8);
    tRex3 = new Dinosaur('tRex', 'grass', 17);
    diplo = new Dinosaur('diplo', 'horses mainly', 67);
    centaur = new Dinosaur('centaur', 'horses mainly', 8);
    pegasus = new Dinosaur('pegsus', 'success', 54);
    onionCat = new Dinosaur('onionCat', 'what it wants', 9000);
    cabbageDog = new Dinosaur('cabbageDog', 'guess', 90);

    park = new Park(`bob's park`, 50, [tRex, diplo, centaur, pegasus, onionCat]);
  })

  it('should have a name', function(){
    actual = park.name;
    assert.strictEqual(actual, `bob's park`);
  });

  it('should have a ticket price', function(){
    actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    actual = park.dinos;
    assert.deepStrictEqual(actual, [tRex1, tRex2, diplo, centaur, pegasus, onionCat]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(cabbageDog);
    actual = park.dinos;
    assert.deepStrictEqual(actual, [tRex1, tRex2, diplo, centaur, pegasus, onionCat, cabbageDog]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino(cabbageDog);
    actual = park.dinos;
    assert.deepStrictEqual(actual, [tRex1, tRex2, diplo, centaur, pegasus, onionCat]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    actual = park.mostPopDino();
    assert.deepStrictEqual(actual, onionCat);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = park.getBySpecies('tRex');
    assert.deepStrictEqual(actual, [tRex1, tRex2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.speciesCleanse('tRex');
    actual = park.dinos;
    assert.strictEqual(actual, [diplo, centaur, pegasus, onionCat]);
  });

// Calculate the total number of visitors per day
  it('should be able to calculate total number of visitors per day', function(){
    actual = park.totalDailyVisitors();
    assert.strictEqual(actual, 9274);
  });

  // Calculate the total number of visitors per year
  it('should be able to calculate the total number of visitors per year', function(){
    actual = park.totalYearlyVisitors();
    assert.strictEqual(actual, 3385010);
  });

  // Calculate the total revenue from ticket sales for one year
  it('should be able to calculate the total revenue from ticket sales for one years', function(){
    actual = park.totalYearlyRevenue();
    assert.strictEqual(actual, 56);
  });

  //Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
  //Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }
  it('should be able to provide "dinosaur count by diet" object', function(){
    actual = park.dinoCountByDiet();
    assert.deepStrictEqual(actual, {
      'grass': 3,
      'horses mainly': 2,
      'what it wants': 1,
      'success': 1
    });
  });


});
