(function () {
  'use strict';

  angular
    .module("app")
    .component("adItem", {
      controller: adItemController,
      controllerAs: '$ctrl',
      templateUrl: '/ads/ad-item.template.html',
      bindings: {
        ad: '<',
      }
    });

  adItemController.$inject = ['$state', 'adService'];

  function adItemController($state, adService) {
    const vm = this;

    vm.editItem = editItem;

    function editItem() {
      $state.go('ad.edit', {
        'id': vm.ad.id,
      });
    }

  }

}());