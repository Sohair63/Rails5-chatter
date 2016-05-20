app.controller('PostCtrl', [
  '$scope',
  function($scope) {
    $scope.posts = [];

    $scope.addPost = function(){
      if(!$scope.feed || $scope.feed === '') { return; }

      $scope.posts.push({
        feed: $scope.feed,
        link: $scope.link,
        upvotes: 0
      });

      $scope.feed = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
