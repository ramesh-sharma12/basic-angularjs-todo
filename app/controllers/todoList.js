'use strict';

angular.module('todoApp')
  .controller('TodoListCtrl', function ($scope, $routeParams, filterFilter, todoLocalStorage) {
         var todos = $scope.todos = [];  

         $scope.onInit = function(){
            if(todoLocalStorage.get()){
                $scope.todos = todoLocalStorage.get();
            }
         };      

        $scope.removeTodo = function(id) {
            var index = 0;
            angular.forEach($scope.todos, function(todo, index){
                 if(todo.id == id) index = index;
            });

            if (index > -1) {
                $scope.todos.splice(index, 1);
            }

            todoLocalStorage.put($scope.todos);
        };           
  });
