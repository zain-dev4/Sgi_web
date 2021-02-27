 var myApp = angular.module("demo",[]);
 myApp.directive('datepicker',function(){
return{
    restrict:"EA",
    templateUrl:"datepicker.html", 
    scope:true,
    required:'ngModel',
    link:function(scope,elm,atrib,ngModel){
        //initial variable
        scope.ViewDate=moment();
        var seletedDate=null;
        function genratedayes(){
            scope.day={};
            var startofselecteddate=moment.isMoment(seletedDate)?seletedDate.colne().startOf("day"):null;
            var startDate=scope.ViewDate.clone().startOf("month").startOf("week").startOf("day");
            var endDate=scope.ViewDate.clone().endOf("month").endOf("week").endOf("day");
            while(startDate < endDate){
                scope.days.push({
                    label:startDate.date(),
                    inMonth:startDate.month()===scope.viewDate.month() && startDate.year() === scope.viewDate.year(),
                    date:startDate.valueOf(),
                    selected:startDate.isSame(seletedDate)
                });
                startDate.add(1,'day');
            }
        }
        generateDays();
    }

}
 });