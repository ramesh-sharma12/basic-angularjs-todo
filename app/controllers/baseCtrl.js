'use strict';

angular
    .module('todoApp')
    .controller('BaseCtrl', function ($scope, $location, $routeParams) {

        $scope.tabs = [
            {
                title:'Home',
                url: '/home',
                isActive : false
            }, {
                title:'Todo',
                url: '/todo',
                isActive : false
            }
        ];

        $scope.onInit = function(){

           setActiveTab()
        };

        

        $scope.$on('$routeChangeSuccess', function() {
           setActiveTab();
        });

        var setActiveTab = function(){
            var url = $location.path();

            angular.forEach($scope.tabs, function(tab){
                tab.isActive = false;
            });

            if(url.indexOf('home') > 0){
                 $scope.tabs[0].isActive = true;
            }else{
                $scope.tabs[1].isActive = true;
            }
        };
    });