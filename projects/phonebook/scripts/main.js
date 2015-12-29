var phoneBook = angular.module('phoneBook', ['naif.base64'])
	.controller('phoneBookCtrl', ['$scope', function($scope) {
		$scope.currentId = -1;
		$scope.phonebook = [{
			name: 'Dmitriy Pristupa',
			number: '+1234567890',
			email: 'email@email.com',
			photo: 'img/photo.jpg'
		},
		{
			name: 'John Doe',
			number: '+1234567890',
			email: 'email@email.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 2',
			number: '+2222222222',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 3',
			number: '+3333333333',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 4',
			number: '+4444444444',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 5',
			number: '+5555555555',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 6',
			number: '+6666666666',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 7',
			number: '+7777777777',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 8',
			number: '+8888888888',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 9',
			number: '+9999999999',
			email: 'test@test.com',
			photo: 'img/profile.jpg'
		}];
		$scope.addContact = function() {
			if($scope.name !== '' && $scope.phone !== '') {
				$scope.phonebook.push({
					name: $scope.name,
					number: $scope.number,
					email: $scope.email,
					photo: $scope.photo
				});
				$scope.name = '';
				$scope.number = '';
				$scope.email = '';
			}
		};
		$scope.saveContact = function() {
			if($scope.currentId > -1) {
				$scope.phonebook[$scope.currentId].name = $scope.name;
				$scope.phonebook[$scope.currentId].number = $scope.number;
				$scope.phonebook[$scope.currentId].email = $scope.email;
				$scope.name = '';
				$scope.number = '';
				$scope.email = '';
				$scope.currentId = -1;
			}
		};
		$scope.editContact = function(currentId) {
			$scope.currentId = currentId;
			$scope.name = $scope.phonebook[currentId].name;
			$scope.number = $scope.phonebook[currentId].number;
			$scope.email = $scope.phonebook[currentId].email;
		};
		$scope.deleteContact = function(currentId) {
			$scope.phonebook.splice(currentId, 1);
		};
	}]);