const Cinema = function(films=[]){
  this.films = films
}

Cinema.prototype.getFilmTitles = function () {
  return this.films.map(film => film.name);
};

Cinema.prototype.findFilm = function(filmName) {
  return this.films.find(film => film.name === filmName);
};

Cinema.prototype.filterByGenre = function(filmGenre) {
  return this.films.filter(film => film.genre === filmGenre);
};

Cinema.prototype.hasFilmsOfYear = function(filmYear) {
  return this.films.some(film => film.year === filmYear);
};

module.exports = Cinema;
