/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular
    .module('todoApp')
    .factory('todoLocalStorage', function () {
        var STORAGE_ID = 'todoAppData';

        return {
            get: function () {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            },

            put: function (todos) {
                localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
            },

            del: function(){
                 localStorage.setItem(STORAGE_ID, null);
            }
        };
    });