const assert = require('assert');
const Film = require('../models/film');

describe('Film', function(){
  let film;

  beforeEach(function() {
    film = new Film('Gladiator', 'Action', '2000', 155);
  });

  it('should have a name', function(){
    assert.strictEqual(film.name, 'Gladiator')
  });

});
