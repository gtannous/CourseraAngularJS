(function(){
    'use strict';

    angular.module('TooMuch',[])
    .controller('TooMuchController', function($scope){
        $scope.value = "";
        $scope.message = "";
        $scope.CheckIfTooMuch = function(){
            var food = GetIfFoodIsTooMuch($scope.value);
            if(food > 3)
            {
                $scope.message = 'Too Much!';
            }
            else
                $scope.message = 'Enjoy!';

        };
        
        function GetIfFoodIsTooMuch(string){
            var ListOfFood = string.split(',');
            return ListOfFood.length;
        }
    });
})();