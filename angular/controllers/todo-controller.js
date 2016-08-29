app.controller("TodoController", ["$scope", "$localStorage", function($scope, $localStorage) {
	$scope.task = {};
	$scope.tasks = [];
	$scope.noTasks = true;
	$scope.archiveAllConfirm = false;

	$scope.addTask = function(task) {
		if (task.task.length > 0) {
			task.done = false;
			$scope.tasks.push(task);
			$scope.task = {};
			$scope.orderTasks();
			$scope.save();
		}
	};

	$scope.orderTasks = function() {
		var done = [], notDone = [];
		$scope.tasks.forEach(function(task) {
			if (task.done) {
				done.splice(0, 0, task);
			} else {
				notDone.push(task);
			}
		});

		var totalTasks = notDone.concat(done);
		$scope.tasks = totalTasks;
		$scope.save();
	};

    $scope.archive = function() {
        var oldTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTasks, function(task) {
            if (!task.done) {
                $scope.tasks.push(task);
            }
        });
        $scope.save();
    };

    $scope.archiveAllConfirmCheck = function () {
        if ($scope.tasks.length > 0) {
            $scope.archiveAllConfirm = true;
        }
    };

    $scope.archiveAllYes = function() {
        $scope.tasks = [];
        $scope.archiveAllConfirm = false;
        $scope.save();
    };
    $scope.archiveAllNo = function() {
        $scope.archiveAllConfirm = false;
    };

    $scope.save = function() {
        $localStorage.tasks = $scope.tasks;
        if ($scope.tasks.length > 0) {
            $scope.noTasks = false;
        } else {
            $scope.noTasks = true;
        }
    };

    $scope.load = function() {
        if ($localStorage.tasks !== undefined) {
            $scope.tasks = $localStorage.tasks;
            if ($scope.tasks.length > 0) {
                $scope.noTasks = false;
            }
        }
    };

    if ($scope.tasks.length <= 0) {
        $scope.load();
    }
}]);
