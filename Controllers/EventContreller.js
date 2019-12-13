'use strict';
eventsApp.controller('EventController',
  function EventController($scope){
    $scope.event = {
      name:'abc',
      date:'1/12/2019',
      time: '10.30am'
    }
  }
);
