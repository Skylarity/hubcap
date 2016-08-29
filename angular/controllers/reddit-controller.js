app.controller("RedditController", ["$scope", "RedditService", function($scope, RedditService) {
	$scope.subreddit = "";
	$scope.feedUrl = "";
	$scope.feed = {};

	$scope.getFeed = function(url) {
		RedditService.getFeed(url)
			.then(function(result) {
				$scope.feed = result.data.data;
			});
	};

	$scope.setSubreddit = function(subreddit) {
		if (subreddit.length > 0) {
			$scope.subreddit = subreddit;
			$scope.setFeedUrl($scope.subreddit);
			$scope.getFeed($scope.feedUrl);
		}
	};

	$scope.setFeedUrl = function(subreddit) {
		$scope.feedUrl = "https://www.reddit.com/r/" + subreddit + ".json";
	};

	if ($scope.subreddit.length === 0) {
		$scope.subreddit = "ProgrammerHumor";
		$scope.setFeedUrl($scope.subreddit);
		$scope.getFeed($scope.feedUrl);
	}
}]);
