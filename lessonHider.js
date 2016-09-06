angular.module('directivePractice').directive('lessonHider',function(){

  return {
    restrict: 'E',
    templateUrl: './lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&',
      checkbox: '=',
      deleteLesson: '&'

    },
    controller: function($scope,lessonService){

      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope,element,attributes){
      scope.strikethrough = function(){
          if(scope.checkvalue){
            element.css({"text-decoration": "line-through"})
          }
          else {
            element.css({"text-decoration": "none"})
          }
      }

      scope.getSchedule.then(function(response){
        scope.schedule = response.data;
        for (var i = 0; i < scope.schedule.length; i++){
          if (scope.schedule[i]["lesson"] === scope.lesson) {
            // element.css({"text-decoration": "line-through"})
            scope.lessonDay = scope.schedule[i]["weekday"]
            return;
          }
        }
      })

    }
  }
});
