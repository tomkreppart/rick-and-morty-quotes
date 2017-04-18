(function() {
  'use strict'

  angular.module('app')
    .service('searchService', SearchService)

    SearchService.$inject = ['$http']

    function SearchService($http) {
      this.search = ""

      this.getCharacters = () => {
        return $http.get('/api/characters')
      }

      this.getOneCharacter = (id) => {
        return $http.get('/api/characters/' + id)
      }

      this.updateOneCharacter = (id) => {
        return $http.put('/api/characters/' + id)
      }

      this.postNewCharacter = (character) => {
        return $http.post('/api/characters', character)
      }

      this.postNewQuote = (character) => {
        return $http.post('/api/characters/' + character.id + '/quotes/', character.newQuote)
      }

      this.updateOneQuote = (character_id, quote_id) => {
        return $http.put('/api/characters/' + character_id + '/quotes/' + quote_id)
      }

      this.voteUp = (character) => {
        return $http.post(`/api/characters/${character.id}/votes`)
          .then(res => res.data.voteCount)
      }

      this.voteDown = (character) => {
        return $http.delete(`/api/characters/${character.id}/votes`)
          .then(res => res.data.voteCount)
      }
    }
}());
