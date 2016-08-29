app.controller("RedditController", ["$scope", "RedditService", function($scope, RedditService) {
	$scope.subreddit = "programmerhumor";
	$scope.feedUrl = "https://www.reddit.com/r/" + $scope.subreddit + ".json";
	$scope.feed = {};

	RedditService.getFeed($scope.feedUrl)
		.then(function(result) {
			$scope.feed = result.data.data;
		});
}]);
