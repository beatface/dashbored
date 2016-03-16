"use strict";

app.controller('ShowNotesCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("notes controller!!");
    $scope.allNotes = "";

    $http.get(`/api/notes`)
    .then(function(data) {
        console.log(data);
        $scope.allNotes = data.data;
    });


}]);
