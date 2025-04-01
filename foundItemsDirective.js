(function () {
    'use strict';

    angular.module('NarrowItDownApp')
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        return {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
    }

    function FoundItemsDirectiveController() {
        var list = this;
    }
})();
