
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.
exports.merge = function(left, right) {

	var leftI = 0;
	var rightI= 0;
	var res = [];
	while (leftI < left.length || rightI < right.length) {
// what to do if you've gone through all of the left elements
		if (leftI === left.length) {
			res.push(right[rightI]);
			rightI++;
// what to do if you've gone through all of the right elements
		} else if (rightI === right.length) {
			res.push(left[leftI]);
			leftI++;
// what to do when the element from the right array is left than the one from the left
		} else if (right[rightI] <= left[leftI]) {
			res.push(right[rightI]);
			rightI ++;
// what to do if the element from the left is less than the one from the right
		} else if (left[leftI] < right[rightI]) {
			res.push(left[leftI]);
			leftI++;
		}

	}
	return res;


}

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
	if(arr.length < 2) {
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length); //-1?
	var sortedL = exports.mergeSort(left);
	var sortedR = exports.mergeSort(right);
	return exports.merge(sortedL, sortedR)

}








