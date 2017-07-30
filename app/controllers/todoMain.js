angular
  .module('todoApp')
  .controller('TodoMainCtrl', function ($scope, $routeParams, filterFilter, todoLocalStorage) {
    var todos = $scope.todos = [];

    $scope.onInit = function () {
      $scope.todo = {
        id : 0,
        title: '',
        description: '',
        status: 'Pending',
        priority: 'Low',
        date: new Date()
      };

      if (todoLocalStorage.get()) {
        $scope.todos = todoLocalStorage.get();
      }
    };

    $scope.addTodo = function () {
      var newTodo = $scope
        .todo
        .title
        .trim();

      if (!newTodo) {
        return false;
      }

      $scope.todo.id = $scope.todos.length + 1;

      $scope.todos.push($scope.todo);

      todoLocalStorage.put($scope.todos);

      $scope.onInit();  
    };

  });