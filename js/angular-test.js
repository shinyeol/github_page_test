function init() {
 
    // bind data for memus
    var menuList = data.menus;

    // bind data for posts
    var postList = data.posts;

    // var postTmp = [];
    
    // for(var i = 0; i < postList.length; i++) {
    //     postTmp += '<div class="post-preview">'
    //             + '<a href="'+ postList[i].url +'">'
    //             + '<h2 class="post-title">'
    //             + postList[i].title
    //             + '</h2>'
    //             + '<h3 class="post-subtitle">'
    //             + postList[i].subtitle
    //             + '</h3>'
    //             + '</a>'
    //             + '<p class="post-meta">Posted by '
    //             + '<a href="#">'+ postList[i].author +'</a></p>'
    //             + '</div><hr>';
        
    // }
    
    var app = angular.module("myApp", []);
    
    // controller for create navi
    app.controller('namesCtrl', function($scope) {
      $scope.menus = menuList;
      $scope.posts = postList;
    });
    
    // directive for post
    // app.directive("postTmp", function() {
    //   return {
    //     template : postTmp
    //   };
    // });
}

init();


