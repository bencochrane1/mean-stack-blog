var app = angular.module('candyBlog', ['ui.router']);


app.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});


app.controller('MainController', [
    '$scope',
    'blogs',
    function($scope, blogs) {
        $scope.example = 'Hey its my first Angular blog!';
        $scope.blogs = blogs.blogs
        $scope.createBlog = function() {
            if (!$scope.title || $scope.title === '' || $scope.subtitle === '' || $scope.content === '' || $scope.imageurl === '' || $scope.readtime === '') {
                return;
            }
            $scope.blogs.push({
                title: $scope.title, 
                content: $scope.content,
                subtitle: $scope.subtitle,
                imageurl: $scope.imageurl,
                readtime: $scope.readtime,
                recommends: 0,
                comments: [
                    { commenter: 'Ben', comment: 'This is a great article', recommends: 0 },
                    { commenter: 'Sam', comment: 'This is even better', recommends: 0 }
                ]
            });
            $scope.title = '';
            $scope.content = '';
            $scope.imageurl = '';
            $scope.readtime = '';
            $scope.subtitle = '';
        };
        $scope.increaseRecommends = function(blog) {
            blog.recommends += 1;
        };
    }

])

app.controller('BlogsController', [
    '$scope',
    '$stateParams',
    'blogs',
    function($scope, $stateParams, blogs) {
        $scope.blog = blogs.blogs[$stateParams.id];
    }


])

app.factory('blogs', [function(){
    var o = {
        blogs: []
    }
    return o;
}]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: '/welcome.html',
            controller: 'MainController'
        })

        .state('blogs', {
            url: '/blogs/{id}',
            templateUrl: '/blogs.html',
            controller: 'BlogsController'
        });

        $urlRouterProvider.otherwise('welcome')
    }
]);