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
      controller : "responsavel"
    });
    // app.controller("firstController",function($scope){

    // })
});
app.controller("responsavel",function($scope , $filter)
{
  $scope.myFunc = function()
  {
    $scope.user.branch = '';
  };
  $scope.user = {bankName: ''};
  
  $scope.cat = [{
    "name": "Feriado",
    "branches": [{
      "name": "INFANTIL",
    }, {
      "name": "Férias escolares",
    }]
  },
   {
    "name": "Fim DO Ano Letivo",
    "branches": [{
      "name": "FUNDAMENTAL I",
    }, {
      "name": "INFANTIL",
    }, {
      "name": "MÉDIO",
    }]
  },
   {
    "name": "Férias escolares",
    "branches": [{
      "name": "FUNDAMENTAL II",
    }, {
      "name": "MÉDIO",
    }, {
      "name": "INFANTIL",
    }]
  },
   {
    "name": "Recesso",
    "branches": [{
      "name": "INFANTIL",
    }, {
      "name": "FUNDAMENTAL I",
    }, {
      "name": "MÉDIO",
    }]
  },
   {
    "name": "Recuperação",
    "branches": [{
      "name": "INFANTIL",
    }, {
      "name": "FUNDAMENTAL II",
    }, {
      "name": "INFANTIL",
    }]
  },
];
  
  $scope.getBranches = function(selectedBank) {
    var filteredBank = $filter('filter')($scope.cat, selectedBank);
    return filteredBank[0].branches;
  };
  // $scope.catoption = [
	//   "Feriado",
	//   "Fim DO Ano Letivo",
	//   "Férias escolares",
	//   "Recesso",
	// 	"Recuperação",
	// ];

  // $scope.courseopt = [
  //   "INFANTIL",
	//   "FUNDAMENTAL I",
	//   "FUNDAMENTAL II",
	//   "MÉDIO",
  // ];

  $scope.serialopt = [ 
    "INFANTIL",
    "FUNDAMENTAL I",
    "FUNDAMENTAL II",
    "MÉDIO"
  ];

  $scope.turmaopt = [ 
    "A",
    "B",
    "C"
  ];

  $scope.discipline = [ 
    // "Arte Musical e Cênica",
	  // "Arte Plástica",
	  // "Ciências",
    // "Educação Digital",
    // "Educação Física",
    // "Ensino Religioso",
    // "Geografia",
    "História",
		"Inglês",
		"Língua Portuguesa",
	  "Matemática",
  ];
  // $scope.responsedata = function(bankName,branch,serial,turma,discipline,comunicados)
  // {
  //   console.log(bankName);
  //   console.log(branch);
  //   console.log(serial);
  //   console.log(turma);
  //   console.log(discipline);
  //   console.log(comunicados);
  //   // console.log(scope.user.branch);
  // }
  console.log($scope.tudosoco);
  $scope.occurrenceOptions = [];
  $scope.occurrenceOptions.push('previous');
  $scope.occurrenceOptions.push('current');
  $scope.occurrenceOptions.push('next');
 
 $scope.model = {};
 $scope.model.selectedOccurrence = 'current';
});

