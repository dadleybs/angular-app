// AngularJS file

app.directive('specialsInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/specialsInfo.html'
  };
});