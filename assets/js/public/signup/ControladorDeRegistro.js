angular.module('ModuloDeRegistro').controller('ControladorDeRegistro', ['$scope','$http', function($scope, $http){
	
	// Ponemos la pagina en carga default falsa
	$scope.signupForm = {
		loading: false
	}


	$scope.submitSignupForm= function () {

		$scope.signupForm.loading = true;
		
		$http.post('/signup', {
			nombre: $scope.signupForm.name,
			usuario: $scope.signupForm.title,
			email: $scope.signupForm.email,
			contraseña: $scope.signupForm.password
		})
		.then(function onSuccess(sailsResponse){
			window.location = '/user';

		})
		.catch(function onError(sailsResponse){
			console.log(sailsResponse);
		})
		.finally(function eitherWay(){
			$scope.signupForm.loading = false;
		})


	}
}]);