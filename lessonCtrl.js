angular.module('directivePractice').controller('lessonCtrl',function($scope){

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  // $scope.test = 'Two-way data binding!';

  $scope.announceDay = function(lesson,day) {
    if (day == null){
      alert ('"'+lesson +'"'+ ' is not yet scheduled.')
    }
    else {
      alert ('"'+lesson +'"'+ ' is active on ' + day + '.');
    }

  };

  $scope.checkvalue = false;

  $scope.deleteLesson = function(lesson){
    $scope.lessons.splice($scope.lessons.indexOf(lesson),1);
  }

});
