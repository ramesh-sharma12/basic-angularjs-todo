'use strict';

angular
    .module('todoApp')
    .controller('TodoEditCtrl', function ($scope, $routeParams, filterFilter, todoLocalStorage) {
        var todos = $scope.todos = [];
        var index = 0;

        $scope.onInit = function () {
            index = 0;
            if (todoLocalStorage.get()) {
                $scope.todos = todoLocalStorage.get();

                angular.forEach($scope.todos, function (todo, index) {
                    if (todo.id == + $routeParams.id) {
                        index = index;
                        $scope.todo = todo;
                        $scope.todoViewModel = angular.copy(todo);
                    }
                });
            }
        }

        $scope.saveForm = function () {

            angular
                .forEach($scope.todos, function (todo, index) {
                    if (todo.id == + $routeParams.id) {
                        $scope.todos[index] = $scope.todo;
                    }
                });

            todoLocalStorage.put($scope.todos);

            window.location.href = "/home";
        };

        $scope.resetForm = function () {
            $scope.todo = angular.copy($scope.todoViewModel);
        }
    });
