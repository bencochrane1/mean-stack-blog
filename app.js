var app = angular.module('candyBlog', []);


app.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});


app.controller('MainController', [
    '$scope',
    function($scope) {
        $scope.example = 'Hey its my first Angular blog!';
        $scope.blogs = [
            { title: 'blog 1', subtitle: 'this is my 1st subtitle', content: 'This is my 1st blog', imageurl: 'https://farm8.staticflickr.com/7639/16145005443_e2aee1110a_s.jpg', recommends: 2, readtime: 4 },
            { title: 'blog 2', subtitle: 'this is my 2nd subtitle', content: 'This is my 2nd blog', imageurl: 'https://farm8.staticflickr.com/7639/16145005443_e2aee1110a_s.jpg', recommends: 2, readtime: 6 },
            { title: 'blog 3', subtitle: 'this is my 3rd subtitle', content: 'This is my 3rd blog', imageurl: 'https://farm8.staticflickr.com/7639/16145005443_e2aee1110a_s.jpg', recommends: 2, readtime: 2 },
            { title: 'blog 4', subtitle: 'this is my 4th subtitle', content: 'This is my 4th blog', imageurl: 'https://farm8.staticflickr.com/7639/16145005443_e2aee1110a_s.jpg', recommends: 2, readtime: 7 },
            { title: 'blog 5', subtitle: 'this is my 5th subtitle', content: 'This is my 5th blog', imageurl: 'https://farm8.staticflickr.com/7639/16145005443_e2aee1110a_s.jpg', recommends: 2, readtime: 3 }
        ];
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
                recommends: 0
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

]);


