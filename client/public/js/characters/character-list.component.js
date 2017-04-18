(function() {
  'use strict'

  angular.module('app')
    .component('characterList', {
      templateUrl: '/js/characters/character-list.template.html',
      controller: controller
    })

    controller.$inject = ['searchService']


    function controller(searchService) {
      const vm = this

      vm.$onInit = onInit
      vm.togglePostForm = togglePostForm
      vm.createCharacter = createCharacter
      vm.createQuote = createQuote
      vm.voteUp = voteUp
      vm.voteDown = voteDown
      vm.searchService = searchService

      function onInit() {
        vm.sortType = '-voteCount'
        vm.sortName = 'Most Popular'

        searchService.getCharacters().then(function (response) {
          vm.characters = response.data
          // console.log(vm.characters);
        })
      }


      function togglePostForm() {
        vm.toggleForm = !vm.toggleForm
      }


      function createCharacter() {
        vm.character.voteCount = 0
        vm.character.createdAt = new Date()
        vm.character.quotes = []
        vm.newPostForm.$setPristine()
        vm.newPostForm.$setUntouched()
        vm.togglePostForm()
        delete vm.addPost

        searchService.postNewCharacter(vm.character).then(function (response) {
            delete vm.character
            vm.newCharacter = response.data;

            searchService.getCharacters().then(function (response) {
              vm.characters = response.data
            })
        })

      }


      function createQuote(character) {

        searchService.postNewQuote(character).then(newQuote => {
            character.quotes.push(character.newQuote)
            delete character.newQuote

        })
      }


      // function getSoundClip() {
      //   vm.soundClip = vm.quote.id.play()
      // }


      function voteUp(character) {
          character.voteCount++
      }


      function voteDown(character) {
        if(character.voteCount == 0) return
        character.voteCount--
      }






    }
}());
