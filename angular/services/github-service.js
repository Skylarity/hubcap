app.service("GithubService", function($http) {
	this.getFeed = function(url) {
		return $http.get("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=" + encodeURIComponent(url));
	};
});
