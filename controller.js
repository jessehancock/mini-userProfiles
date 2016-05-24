angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";
   
		$scope.acquireUsers = function(){
			$scope.users = mainService.getUsers();
			
		}
		
		$scope.acquireUsers();
	
		
		$scope.toggleFavorite = mainService.toggleFavorite;
}
)