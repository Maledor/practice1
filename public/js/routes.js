(function() {
  angular.module('practice1')
          .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];
    .when('/', {
      templateUrl: 'html/views/home.html'
    })
    .when()
}());
