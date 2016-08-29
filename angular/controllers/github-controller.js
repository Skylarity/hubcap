app.controller("GithubController", ["$scope", "GithubService", function($scope, GithubService) {
	$scope.feedUrl = "https://github.com/skylarity.atom";
	$scope.feed = {};

	GithubService.getFeed($scope.feedUrl)
		.then(function(result) {
			$scope.feed = result.data.responseData.feed;
		});
}]);
