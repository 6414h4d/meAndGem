// controller.js
angular.module('myApp').controller('MyController', ['$scope', '$sce', function($scope, $sce) {
    // Controller logic goes here
    $scope.joke = {
        id: 'YOUR_YOUTUBE_VIDEO_ID_HERE'
    };
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };
}]);