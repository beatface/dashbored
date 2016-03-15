"use strict";

app.controller('ShowNotesCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("notes controller!!");
    $scope.allNotes = "";

    $http.get(`/notes`)
    .then(function(data) {
        console.log(data);
        $scope.allNotes = data.data;
    });


}]);
