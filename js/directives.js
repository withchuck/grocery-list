(function() {
  angular.module('directives', []);
  
  angular.module('GroceryList').directive('addItemForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'add-item-form.html'
    };
  });

  angular.module('GroceryList').directive('groceryList', function() {
    return {
      restrict: 'E',
      templateUrl: 'grocery-list.html',
      controller: function() {

      }
    };
  });

  angular.module('GroceryList').directive('cartItems', function() {
    return {
      restrict: 'E',
      templateUrl: 'cart-items.html'
    };
  });
})();