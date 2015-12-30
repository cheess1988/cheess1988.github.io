var phoneBook = angular.module('phoneBook', ['naif.base64'])
	.controller('phoneBookCtrl', ['$scope', function($scope) {
		$scope.currentId = -1;
		$scope.name = '';
		$scope.number = '';
		$scope.email = '';
		$scope.date = '';
		$scope.phonebook = [{
			name: 'Dmitriy Pristupa',
			number: '+ 1234567890',
			email: 'email@email.com',
			date: '15 April 1988',
			photo: 'img/photo.jpg'
		},
		{
			name: 'John Doe',
			number: '+ 1234567890',
			email: 'email@email.com',
			date: '25 April 1988',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 2',
			number: '+ 2222222222',
			email: 'test@test.com',
			date: '05 April 1998',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 3',
			number: '+ 3333333333',
			email: 'test@test.com',
			date: '15 April 2000',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 4',
			number: '+ 4444444444',
			email: 'test@test.com',
			date: '15 October 1988',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 5',
			number: '+ 5555555555',
			email: 'test@test.com',
			date: '15 May 1988',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 6',
			number: '+ 6666666666',
			email: 'test@test.com',
			date: '15 May 2000',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 7',
			number: '+ 7777777777',
			email: 'test@test.com',
			date: '05 April 1964',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 8',
			number: '+ 8888888888',
			email: 'test@test.com',
			date: '15 May 1978',
			photo: 'img/profile.jpg'
		},
		{
			name: 'John Doe 9',
			number: '+ 9999999999',
			email: 'test@test.com',
			date: '15 April 2015',
			photo: 'img/profile.jpg'
		}];
		$scope.addContact = function() {
			if($scope.name !== '' && $scope.number !== '') {
				$scope.phonebook.push({
					name: $scope.name,
					number: "+ " + $scope.number,
					email: $scope.email,
					date: $scope.date,
					photo: $scope.photo,
				});
				$scope.name = '';
				$scope.number = '';
				$scope.email = '';
				$scope.date = '';
			} else {
				alert("Add all the required fields *");
			}
		};
		$scope.saveContact = function() {
			if($scope.currentId > -1) {
				$scope.phonebook[$scope.currentId].name = $scope.name;
				$scope.phonebook[$scope.currentId].number = $scope.number;
				$scope.phonebook[$scope.currentId].email = $scope.email;
				$scope.phonebook[$scope.currentId].date = $scope.date;
				$scope.phonebook[$scope.currentId].photo = $scope.photo;
				$scope.name = '';
				$scope.number = '';
				$scope.email = '';
				$scope.date = '';
				$scope.photo = '';
				$scope.currentId = -1;
			}
		};
		$scope.editContact = function(currentId) {
			$scope.currentId = currentId;
			$scope.name = $scope.phonebook[currentId].name;
			$scope.number = $scope.phonebook[currentId].number;
			$scope.email = $scope.phonebook[currentId].email;
			$scope.date = $scope.phonebook[currentId].date;
		};
		$scope.deleteContact = function(currentId) {
			$scope.phonebook.splice(currentId, 1);
		};
	}]);