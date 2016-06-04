var app = angular.module("calculatorApp", []);

app.controller("Ctrl", mainController)

function mainController($scope) {

	//string to evaluate with which numbers and operands will be concatenated
	$scope.toEvaluate = "";
	//sample expression to show in history on initiation
	$scope.expressionArray = ["2 + 2 = 4"];
	//limit to number of expressions that will be shown in history
	$scope.expressionLimit = 3;
	//boolean to indicate if decimal already entered; prevents another from being entered
	var decimalEntered = false;
	//boolean to indicate if 'equal sign' has been pushed; prevents concatenation of new entries 
	//to previous answer but allows previous answer to be first number in current expression if desired
	var equalsPushed = false;

	//inputs the numbers 0-9
	$scope.input = function(num) {
		if(equalsPushed) {
			$scope.currentNumber = undefined
		}
		if(!decimalEntered) {
			if ($scope.currentNumber === undefined) {$scope.currentNumber = 0};
			$scope.currentNumber = $scope.currentNumber * 10 + num;	
			$scope.currentExpression = $scope.toEvaluate;
		} else {
			$scope.currentNumber = $scope.currentNumber + num;
		}
		equalsPushed = false;
	}

	//input a decimal
	$scope.inputDecimal = function() {
		if(equalsPushed) {
			$scope.currentNumber = undefined
		}
		if(!decimalEntered) {
			if ($scope.currentNumber === undefined) {$scope.currentNumber = 0};
			$scope.currentNumber = $scope.currentNumber + ".";
			decimalEntered = true;
		}
		equalsPushed = false;
	}

	//the four basic operands
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

	//equals button
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

	//error message
	// clearErrorMessage = function() {
	// 	$scope.errorMessage = "";
	// }

	//to clear everything
	$scope.clear = function() {
		$scope.currentNumber = undefined;
		// clearErrorMessage();
		decimalEntered = false;
		decimalPoint = 0;
		$scope.toEvaluate = "";
	}

	//save to expression array and be viewable on left side as history
	saveExpression = function(expression) {
		$scope.expressionArray.push(expression);
	}

	//to clear the history on left side
	$scope.clearHistory = function() {
		$scope.expressionArray = [];
	}

	//to turn positive number negative and vice versa
	$scope.posNeg = function() {
		$scope.currentNumber = $scope.currentNumber - ($scope.currentNumber * 2);
	}

}


//NICE TO HAVE: make so when you type numbers on keyboard, it enters them in calculator
//is error message necessary?
//6 * +- gives NaN error: why? 