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
      controller: "firstController",
    })
    .when("/Responsavel", {
      templateUrl: "view/Responsavel.html",
    });
  });
  app.controller("firstController",function($scope){
      $scope.array = [
        {
          time: "09:00",
          color: "green",
          name: "computrade",
        },
        {
          time: "10:00",
          color: "red",
          name: "Englis",
        },
        {
          time: "11:00",
          color: "blue",
          name: "Music",
        },
        {
          time: "12:00",
          color: "purple",
          name: "break",
        },
        {
          time: "1:00",
          color: "yellow",
          name: "Math",
        },
     
        {
          time: "03:00",
          color: "",
          name: "",
        },
      ];
      console.log($scope.array);
  })