angular.module('GroceryList', ['ui.bootstrap', 'directives']);

angular.module('GroceryList').controller('List', ['$scope', '$http', function($scope, $http) {
  $scope.cartItems = [];
  $scope.archiveItems = [];

  $http.get('js/list.js')
    .success(function(data) {
      $scope.items = data;
    });

  $scope.addToList = function(newItem) {
    $scope.items.push({
      "title": newItem
    });
    $scope.newItem = "";
  };

  $scope.removeFromList = function(index) {
    $scope.items.splice(index, 1);
  };

  $scope.backToList = function(index) {
    var removedItem = null;

    removedItem = $scope.cartItems.splice(index, 1);
    $scope.items.push(removedItem[0]);
  };

  $scope.addToCart = function(index) {
    var thisItem = $scope.items[index],
      removedItem = null,
      removedItems = [];

    thisItem.isAdded ? thisItem.isAdded = false : thisItem.isAdded = true;
    removedItem = $scope.items.splice(index, 1);
    $scope.cartItems.push(removedItem[0]);
  };

  $scope.checkoutItems = function() {
    var cartLength = $scope.cartItems.length;
    var currentList = {};

    if (cartLength) {
      var confirmed = confirm("Checking out will remove all items from your cart. Proceed?");
      if (confirmed) {
        currentList.date = new Date();
        currentList.list = $scope.cartItems.splice(0, cartLength);
        $scope.archiveItems.push(currentList);
      }
    }
    console.log($scope.archiveItems);
  };

}]);
