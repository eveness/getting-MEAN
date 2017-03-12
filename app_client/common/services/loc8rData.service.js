(function() {

  angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);

  loc8rData.$inject = ['$http'];
  function loc8rData ($http) {
    var locationByCoords = function (lat, lng) {
      //return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
      return $http.get('/api/locations?lng=30.317812&lat=59.957191&maxDistance=20');
    };
    return {
      locationByCoords : locationByCoords
    };
  }

})();