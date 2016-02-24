app.controller("TodoController", ["$scope", function($scope) {
    $scope.task = {};

    $scope.addTask(task) {
        console.log(task);
    };
}]);
