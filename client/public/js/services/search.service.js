(function() {
  'use strict'

  angular.module('app')
    .service('searchService', SearchService)

    SearchService.$inject = ['$http']

    function SearchService($http) {
      this.search = ""

      this.getCharacters = () => {
        return $http.get('https://rick-and-morty-quotes.herokuapp.com/api/characters')
      }

      this.getOneCharacter = (id) => {
        return $http.get('https://rick-and-morty-quotes.herokuapp.com/api/characters/' + id)
      }

      this.updateOneCharacter = (id) => {
        return $http.put('https://rick-and-morty-quotes.herokuapp.com/api/characters/' + id)
      }

      this.postNewCharacter = (character) => {
        return $http.post('https://rick-and-morty-quotes.herokuapp.com/api/characters', character)
      }

      this.postNewQuote = (character) => {
        return $http.post('https://rick-and-morty-quotes.herokuapp.com/api/characters/' + character.id + '/quotes/', character.newQuote)
      }

      this.updateOneQuote = (character_id, quote_id) => {
        return $http.put('https://rick-and-morty-quotes.herokuapp.com/api/characters/' + character_id + '/quotes/' + quote_id)
      }

      this.voteUp = (character) => {
        return $http.post(`https://rick-and-morty-quotes.herokuapp.com/api/characters/${character.id}/votes`)
          .then(res => res.data.voteCount)
      }

      this.voteDown = (character) => {
        return $http.delete(`https://rick-and-morty-quotes.herokuapp.com/api/characters/${character.id}/votes`)
          .then(res => res.data.voteCount)
      }
    }
}());
