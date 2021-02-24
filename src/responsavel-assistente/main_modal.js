var app = angular.module("md", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    // .when("/", {
    //   templateUrl: "index.html",
    // })
    // .when("/Authorizadas", {
    //   templateUrl: "view/service.html",
    // })
    .when("/calender_yearly", {
      templateUrl: "calender_yearly.html",
    })
    .when("/calender_Monthly", {
      templateUrl: "calender_Month.html",
    })
    .when("/calender_Weakly", {
      templateUrl: "calender_Weakly.html",
    })
    .when("/Calender_daily", {
      templateUrl: "Calender_daily.html",
    })
    .when("/Responsavel", {
      templateUrl: "Responsavel.html",
    });
    app.controller("firstController",function($scope){

    })
});