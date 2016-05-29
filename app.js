var app = angular.module('calculatorApp', []);

app

.controller('Ctrl', mainController)

function mainController($scope) {
	$scope.currentNumber = undefined;
	var nextNumber = 0;
	var secondNumber = 0;
	var previousNumber = 0;

	var currentOperator = "";

	$scope.input = function(a) {
		if ($scope.currentNumber == undefined) {$scope.currentNumber = 0};
		$scope.currentNumber = $scope.currentNumber * 10 + a;
	}

	$scope.plus = function() {
		currentOperator = "add";
		if(previousNumber==0) {
			previousNumber = $scope.currentNumber;
			$scope.currentNumber = 0;
		} else {
			$scope.currentNumber = $scope.currentNumber + previousNumber;
		}

		// $scope.currentNumber = undefined;
	}

	$scope.minus = function() {
		currentOperator = "subtract";
		firstNumber = $scope.currentNumber;
		$scope.currentNumber = undefined;
	}

	$scope.times = function() {
		currentOperator = "multiply";
		firstNumber = $scope.currentNumber;
		$scope.currentNumber = undefined;
	}

	$scope.divBy = function() {
		currentOperator = "divide";
		firstNumber = $scope.currentNumber;
		$scope.currentNumber = undefined;
	}

	$scope.equals = function() {
		switch (currentOperator) {
			case "add":
			secondNumber = $scope.currentNumber;
			$scope.currentNumber = firstNumber + secondNumber;
			break;

			case "subtract":
			secondNumber = $scope.currentNumber;
			$scope.currentNumber = firstNumber - secondNumber;
			break;

			case "multiply":
			secondNumber = $scope.currentNumber;
			$scope.currentNumber = firstNumber * secondNumber;
			break;

			case "divide":
			secondNumber = $scope.currentNumber;
			$scope.currentNumber = firstNumber / secondNumber;
			break;
		}
	}

}