var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });
    it('should merge two arrays of size 3', function() {
     expect(mergeSort.merge([1, 2, 3],[4, 5, 6])).toEqual([1,2,3,4,5,6]);
  });
    it('should merge two arrays of different sizes', function() {
     expect(mergeSort.merge([1, 2],[3])).toEqual([1,2,3]);
  });
    it('should merge two arrays of different sizes', function() {
     expect(mergeSort.merge([1],[2,3])).toEqual([1,2,3]);
  });
    it('should merge two arrays of size 3', function() {
     expect(mergeSort.merge([4,5,6],[1,2,3])).toEqual([1,2,3,4,5,6]);
  });
    it('should merge two arrays of different size with various numbers', function() {
     expect(mergeSort.merge([3, 6, 7 , 11],[1,2,3,5,10])).toEqual([1,2,3,3,5,6,7,10,11]);
  });

});

describe('Merge Sort', function() {
  it('should sort an array', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
  });
    it('should sort an array', function() {
     expect(mergeSort.mergeSort([2,1,3,4,2])).toEqual([1,2,2,3,4]);
  });
  it('should sort an array', function() {
     expect(mergeSort.mergeSort([10, 9, 3, 2, 4, 9, 2])).toEqual([2, 2, 3, 4, 9, 9, 10]);
  });



});

