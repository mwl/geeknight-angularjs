app.directive('menu', function($location) {
    var menuItems = [
        {name: "Demo 1", url: "/demo1"},
        {name: "Demo 2", url: "/demo2"},
        {name: "Demo 3", url: "/demo3"}
    ];
    return {
        templateUrl: '/partials/menu.html',
        restrict: "E",
        replace: true,
        scope: {for: '@for' },
        link: function(scope, element, attributes) {
            scope.isActive = function (url) {
                var path = scope.for;
                var isSamePath = path === url;
                var isSubPath = path.indexOf(url + '/') == 0;
                if (isSamePath || isSubPath) {
                    return 'active';
                }
                return '';
            };
            scope.currentUrl = $location.path();
            scope.items = menuItems;
        }
    }
})