angular.module('todoApp')
   .directive('todoList', function(){
        return {
            restrict : "EA",
            scope : {
                list:"=",
            },
            templateUrl : "app/templates/list.html",
            controller: 'TodoListCtrl',
            link : function(scope){
                scope.$watch('list', function(){
                    scope.todos = scope.list;
                });
            }
        }
   });