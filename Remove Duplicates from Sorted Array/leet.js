var removeDuplicates = function(nums) {
    for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
*To solve this problem, I looped through the sorted array and compared each element with the element beside it. In a sorted array, duplicate elements would be beside each other.
For instance,
a sorted array would look like
[1,2,3,3,3,4,5] or [1,2,4,4,5,7,7]
