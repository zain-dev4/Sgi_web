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
      templateUrl: "view/calender_yearly.html",
    })
    .when("/calender_Monthly", {
      templateUrl: "view/calender_Month.html",
    })
    .when("/calender_Weakly", {
      templateUrl: "view/calender_Weakly.html",
    })
    .when("/Calender_daily", {
      templateUrl: "view/Calender_daily.html",
    })
    .when("/Responsavel", {
      templateUrl: "view/Responsavel.html",
    });
    app.controller("firstController",function($scope){

    })
});