app.controller("TodoController", ["$scope", "$localStorage", function($scope, $localStorage) {
    $scope.task = {};
    $scope.tasks = [];

    $scope.addTask = function(task) {
        task.done = false;
        $scope.tasks.push(task);
        $scope.save();
        $scope.task = {};
    };

    $scope.archive = function() {
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks, function(task) {
            if (!task.done) $scope.tasks.push(task);
        });
        $scope.save();
    };

    $scope.archiveAll = function() {
        $scope.tasks = [];
        $scope.save();
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
