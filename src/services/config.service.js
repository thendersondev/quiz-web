angular.module('app').factory('ConfigService', [
  function () {
    return {
      apiBase: 'https://quiz-api-th.eu-west-2.elasticbeanstalk.com/',
    };
  },
]);
