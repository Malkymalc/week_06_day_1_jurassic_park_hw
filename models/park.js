const Park = function(name, ticketPrice, dinos = []){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinos = dinos;
}

Park.prototype.addDino = function (dino) {
  this.dinos.push(dino)
};

Park.prototype.removeDino = function (bad_dino) {
  this.dinos = this.dinos.filter(dino => dino != bad_dino)
};

Park.prototype.mostPopDino = function () {
  return this.dinos.reduce((pop, dino) => {
    return dino.guestsAttractedPerDay > pop.guestsAttractedPerDay ? dino : pop;
  });
};

Park.prototype.getBySpecies = function (species) {
  return this.dinos.filter(dino => dino.species === species)
};

Park.prototype.speciesCleanse = function (speciesToCleanse) {
  this.dinos = this.dinos.filter(dino => dino.species !== speciesToCleanse);
};

Park.prototype.totalDailyVisitors = function () {
  return this.dinos.reduce((sum, dino) => {
    return sum += dino.guestsAttractedPerDay;
  }, 0);
};

Park.prototype.totalYearlyVisitors = function () {
  return this.totalDailyVisitors() * 365.25;
};

Park.prototype.totalYearlyRevenue = function () {
  return this.totalYearlyVisitors() * this.ticketPrice;
};

Park.prototype.dinoCountByDiet = function () {
  return this.dinos.reduce((obj, dino) => {
    Object.keys(obj).includes(dino.diet) ?
    obj[dino.diet] += 1 :
    obj[dino.diet] = 1;
    return obj;
  }, {});

};

module.exports = Park;
