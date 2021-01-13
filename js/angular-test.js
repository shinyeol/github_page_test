function init() {
    console.log("111 do init in angular.js");
    
    console.log(data);
    
    // bind data for memus
    var menuList = data.menus;
    var manuTmp = [];
    
    for(var i = 0; i < menuList.length; i++) {
        manuTmp += '<li class="nav-item">'
            + '<a class="nav-link" href="' + menuList[i].url + '">'+ menuList[i].name +'</a>'
            + '</li>';
        
    }
    
    // bind data for posts
    var postList = data.posts;
    var postTmp = [];
    
    for(var i = 0; i < postList.length; i++) {
        postTmp += '<div class="post-preview">'
                + '<a href="'+ postList[i].url +'">'
                + '<h2 class="post-title">'
                + postList[i].title
                + '</h2>'
                + '<h3 class="post-subtitle">'
                + postList[i].subtitle
                + '</h3>'
                + '</a>'
                + '<p class="post-meta">Posted by '
                + '<a href="#">'+ postList[i].author +'</a></p>'
                + '</div><hr>';
        
    }
    
    
    
    var app = angular.module("myApp", []);
    
    // controller
/*    app.controller('myCtrl', function($scope) {
      $scope.manuNames = manuNames;
    });*/
    
    
    // directive
    app.directive("menuTmp", function() {
      return {
        template : manuTmp
      };
    });
    
    app.directive("postTmp", function() {
      return {
        template : postTmp
      };
    });
}

init();


