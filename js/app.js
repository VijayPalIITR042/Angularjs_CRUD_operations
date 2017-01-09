var myapp = angular.module('myapp',["ngSocial"]);
myapp.controller("myController", function($scope){
	
	
	$scope.newuser={};
	$scope.clickuser={};
	$scope.message="";
	$scope.users=[{name:"vijay", age:"26" ,email:"vijaypal@gmail.com", contact:9026564495},
				  {name:"John" ,age:"27" ,email:"John@gmail.com",contact:353464534},
				  {name:"Hamilton" ,age:"24", email:"Hamilton@gmail.com",contact:354534534}];
	
	$scope.saveuser= function(){
		$scope.$broadcast('show-errors-check-validity');

		$scope.users.push($scope.newuser);
		$scope.newuser={};
		$scope.message="New user added successfully !";
	};
	$scope.selectuser=function(user){
		$scope.clickuser=user;
		
		
	};
	$scope.updateuser=function(){
		$scope.message=" user updated successfully!";
		
	};
	$scope.deleteuser=function(){
	
	$scope.users.splice($scope.users.indexOf($scope.clickuser),1);
		$scope.message="Delete user  successfully!";
	};
	$scope.clearmessage=function(){
		
		$scope.message="";
	};
});

	myapp.controller("ExampleController",['$scope',function($scope){
		 $scope.current_title = 'https://github.com/VijayPalIITR042';
         $scope.current_description = 'https://github.com/VijayPalIITR042';
	}]);