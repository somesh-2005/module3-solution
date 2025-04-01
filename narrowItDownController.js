(function () {
    'use strict';

    angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.searchTerm = "";
        narrowCtrl.found = [];
        narrowCtrl.errorMessage = "";

        narrowCtrl.narrowItDown = function () {
            if (!narrowCtrl.searchTerm) {
                narrowCtrl.errorMessage = "Nothing found";
                narrowCtrl.found = [];
                return;
            }

            MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
            .then(function (items) {
                narrowCtrl.found = items;
                narrowCtrl.errorMessage = items.length === 0 ? "Nothing found" : "";
            });
        };

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.found.splice(index, 1);
        };
    }
})();
