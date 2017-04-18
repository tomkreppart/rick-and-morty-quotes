(function() {
  'use strict'

  angular.module('app')
    .component('characterEdit', {
      templateUrl: '/js/characters/character-edit.template.html',
      controller: controller
    })

    controller.$inject = ['searchService', '$stateParams', '$state']

    function controller(searchService, $stateParams, $state) {
      const vm = this

      vm.$onInit = onInit
      vm.updateCharacter = updateCharacter
      vm.searchService = searchService


      function onInit() {
        searchService.getOneCharacter($stateParams.id).then(function (response) {
          vm.character = response.data
          console.log(vm.character);
        })
      }

      function updateCharacter() {
        searchService.updateOneCharacter().then(function (response) {
          $state.go("list-character")
        })
      }
    }
}());
