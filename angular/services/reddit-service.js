app.service("RedditService", function($http) {
	this.getFeed = function(url) {
		return $http.get(url);
	};
});
