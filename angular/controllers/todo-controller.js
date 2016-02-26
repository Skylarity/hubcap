app.controller("TodoController", ["$scope", "$localStorage", function($scope, $localStorage) {
    $scope.task = {};
    $scope.tasks = [];

    $scope.addTask = function(task) {
        $scope.tasks.push(task);
        $scope.save();
        $scope.task = {};
    };

    $scope.save = function() {
        $localStorage.tasks = $scope.tasks;
    };

    $scope.load = function() {
        if ($localStorage.tasks !== undefined) {
            $scope.tasks = $localStorage.tasks;
        }
    };

    if ($scope.tasks.length <= 0) {
        $scope.load();
    }
}]);
