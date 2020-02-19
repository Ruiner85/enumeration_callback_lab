const Cinema = function(films=[]){
  this.films = films
}

Cinema.prototype.getFilmTitles = function () {
  return this.films.map(film => film.name);
};

Cinema.prototype.findFilm = function(filmName) {
  return this.films.find(film => film.name === filmName);
};

Cinema.prototype.filterByProperty = function(property, filmProperty) {
  return this.films.filter(film => film[property] === filmProperty);
};

Cinema.prototype.hasFilmsOfYear = function(filmYear) {
  return this.films.some(film => film.year === filmYear);
};

Cinema.prototype.allFilmsLengthOver = function(filmLength) {
  return this.films.every(film => film.length >= filmLength);
};

Cinema.prototype.lengthOfAllFilms = function() {
  return this.films.reduce((total, film) => total += film.length, 0);
};

module.exports = Cinema;
