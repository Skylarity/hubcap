app.controller("RedditController", ["$scope", "$localStorage", "RedditService", function($scope, $localStorage, RedditService) {
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
			$scope.save();
		}
	};

	$scope.setFeedUrl = function(subreddit) {
		$scope.feedUrl = "https://www.reddit.com/r/" + subreddit + ".json";
	};

	$scope.save = function() {
		$localStorage.subreddit = $scope.subreddit;
	};

	$scope.load = function() {
		if ($localStorage.subreddit !== undefined) {
			$scope.subreddit = $localStorage.subreddit;
		} else {
			$scope.subreddit = "ProgrammerHumor";
		}
	};

	if ($scope.subreddit.length === 0) {
		$scope.load();
		$scope.setFeedUrl($scope.subreddit);
		$scope.getFeed($scope.feedUrl);
	}
}]);
