angular.module('directivePractice').service('lessonService',function($q,$http){

  this.getSchedule = function () {
      return $http.get('schedule.json');
  }

});
