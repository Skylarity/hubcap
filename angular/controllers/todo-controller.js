app.controller("TodoController", ["$scope", function($scope) {
    $scope.task = {};
    $scope.tasks = [{task: "This is a test."}];

    $scope.addTask = function(task) {
        $scope.tasks.push(task);
        $scope.task = {};
    };
}]);
