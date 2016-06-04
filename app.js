var app = angular.module("calculatorApp", []);

app

.controller("Ctrl", mainController)

function mainController($scope) {
	// $scope.currentNumber = undefined;
	// var firstNumber = 0;
	// var nextNumber = 0;
	// var secondNumber;
	// var previousNumber = 0;

	// var currentOperator = "";

	// $scope.input = function(a) {
	// 	if ($scope.currentNumber === undefined) {$scope.currentNumber = 0};
	// 	$scope.currentNumber = $scope.currentNumber * 10 + a;
	// }

	// var lookingForNext = false;
	// $scope.plus = function() {
	// 	currentOperator = "add";
	// 	if (lookingForNext === false) {
	// 		firstNumber = $scope.currentNumber;
	// 		$scope.currentNumber = undefined;
	// 		lookingForNext = true;
	// 	} else {
	// 		if (secondNumber === undefined) {
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		} else {
	// 			firstNumber = secondNumber + firstNumber;
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		}
	// 	}
	// }

	// $scope.minus = function() {
	// 	currentOperator = "subtract";
	// 	if (lookingForNext === false) {
	// 		firstNumber = $scope.currentNumber;
	// 		$scope.currentNumber = undefined;
	// 		lookingForNext = true;
	// 	} else {
	// 		if (secondNumber === undefined) {
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		} else {
	// 			firstNumber = firstNumber - secondNumber;
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		}
	// 	}
	// }

	// $scope.times = function() {
	// 	currentOperator = "multiply";
	// 	firstNumber = $scope.currentNumber;
	// 	$scope.currentNumber = undefined;
	// }

	// $scope.divBy = function() {
	// 	currentOperator = "divide";
	// 	firstNumber = $scope.currentNumber;
	// 	$scope.currentNumber = undefined;
	// }

	// $scope.equals = function() {
	// 	if ($scope.currentNumber === undefined || firstNumber === undefined) {
	// 		$scope.errorMessage = "invalid operation";
	// 	}
	// 	switch (currentOperator) {
	// 		case "add":
	// 		if (secondNumber === undefined) {
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		} else {
	// 			firstNumber = secondNumber + firstNumber;
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		}
	// 		$scope.currentNumber = firstNumber + secondNumber;
	// 		break;

	// 		case "subtract":
	// 		if (secondNumber === undefined) {
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		} else {
	// 			console.log("h");
	// 			firstNumber = firstNumber - secondNumber;
	// 			secondNumber = $scope.currentNumber;
	// 			$scope.currentNumber = undefined;
	// 		}
	// 		$scope.currentNumber = firstNumber - secondNumber;
	// 		// secondNumber = $scope.currentNumber;
	// 		// $scope.currentNumber = firstNumber - secondNumber;
	// 		break;

	// 		case "multiply":
	// 		secondNumber = $scope.currentNumber;
	// 		$scope.currentNumber = firstNumber * secondNumber;
	// 		break;

	// 		case "divide":
	// 		secondNumber = $scope.currentNumber;
	// 		$scope.currentNumber = firstNumber / secondNumber;
	// 		break;
	// 	}
	// }

	// $scope.clear = function() {
	// 	$scope.currentNumber = undefined;
	// 	firstNumber = undefined;
	// 	secondNumber = undefined;
	// 	lookingForNext = false;
	// 	clearErrorMessage();
	// }

	// clearErrorMessage = function() {
	// 	$scope.errorMessage = "";
	// }

	// var usePIMDAS = true;

	// $scope.yesPIMDAS = function() {
	// 	usePIMDAS = true;
	// 	$scope.usingPIMDAS = "Using PIMDAS";
	// }

	// $scope.noPIMDAS = function() {
	// 	usePIMDAS = false;
	// 	$scope.usingPIMDAS = "Not Using PIMDAS";
	// }
//make buttons grey when use has pushed first button on the calc (otherwise the two modes will get messed up)
	// var canChooseMode = true;

	// if (usePIMDAS) {

	// 	canChooseMode = false;

	$scope.expressionArray = ["2 + 2 = 4"];

	var decimalEntered = false;
	var equalsPushed = false;

	$scope.expressionLimit = 3;

	$scope.input = function(num) {
		if(equalsPushed) {$scope.currentNumber = undefined}
			if(!decimalEntered) {
				if ($scope.currentNumber === undefined) {$scope.currentNumber = 0};
				$scope.currentNumber = $scope.currentNumber * 10 + num;	
				$scope.currentExpression = $scope.toEvaluate;
			} else {
				$scope.currentNumber = $scope.currentNumber + num;
			}
			equalsPushed = false;
		}

		$scope.inputDecimal = function() {
			if(!decimalEntered) {
				if ($scope.currentNumber === undefined) {$scope.currentNumber = 0};
				$scope.currentNumber = $scope.currentNumber + ".";
				decimalEntered = true;
			}
		}

		$scope.toEvaluate = "";

		$scope.plus = function() {
			if($scope.currentNumber !== undefined) {
				$scope.toEvaluate = $scope.toEvaluate + $scope.currentNumber+" + ";
				$scope.currentNumber = undefined;
				$scope.currentExpression = $scope.toEvaluate;
				decimalEntered = false;
			} 
		}

		$scope.minus = function() {
			if($scope.currentNumber !== undefined) {
				$scope.toEvaluate = $scope.toEvaluate + $scope.currentNumber+" - ";
				$scope.currentNumber = undefined;
				$scope.currentExpression = $scope.toEvaluate;
				decimalEntered = false;
			}
		}

		$scope.times = function() {
			if($scope.currentNumber !== undefined) {
				$scope.toEvaluate = $scope.toEvaluate + $scope.currentNumber+" * ";
				$scope.currentNumber = undefined;
				$scope.currentExpression = $scope.toEvaluate;
				decimalEntered = false;
			}
		}

		$scope.divBy = function() {
			if($scope.currentNumber !== undefined) {
				$scope.toEvaluate = $scope.toEvaluate + $scope.currentNumber+" / ";
				$scope.currentNumber = undefined;
				$scope.currentExpression = $scope.toEvaluate;
				decimalEntered = false;
			}
		}

		$scope.equals = function() {
			if($scope.currentNumber !== undefined) {
				$scope.toEvaluate = $scope.toEvaluate + $scope.currentNumber;
				$scope.currentNumber = +eval($scope.toEvaluate).toFixed(7);
				$scope.currentExpression = $scope.toEvaluate+" = "+$scope.currentNumber;
				saveExpression($scope.currentExpression);
				$scope.toEvaluate = "";
				decimalEntered = false;
				equalsPushed = true;
			}
		}


		clearErrorMessage = function() {
			$scope.errorMessage = "";
		}

		$scope.clear = function() {
			$scope.currentNumber = undefined;
			clearErrorMessage();
			decimalEntered = false;
			decimalPoint = 0;
		}

	//saving expressions
	

	saveExpression = function(expression) {
		$scope.expressionArray.push(expression);
	}

	$scope.clearHistory = function() {
		$scope.expressionArray = [];
	}

	$scope.posNeg = function() {
		$scope.currentNumber = $scope.currentNumber - ($scope.currentNumber * 2);
	}

	// } else {

	// }


}


//NICE TO HAVE: make so when you type numbers on keyboard, it enters them in calculator
//bug: will not give decimal then number after clicking clear once, but will after clearing twice (after trying to enter a number then clicking clear)