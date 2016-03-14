"use strict";
/* eslint-disable */
const app = angular.module("dashbored", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "fe_partials/index.html"
        });
    $urlRouterProvider.otherwise("/");
});
