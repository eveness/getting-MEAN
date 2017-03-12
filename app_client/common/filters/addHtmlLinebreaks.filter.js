(function () {

  angular
    .module('loc8rApp')
    .filter('addHtmlLinebreaks', addHtmlLinebreaks);

  function addHtmlLinebreaks() {
    return function (text) {
      var output = text.replace(/\n/g, '<br/>');
      return output;
    };
  }

})();