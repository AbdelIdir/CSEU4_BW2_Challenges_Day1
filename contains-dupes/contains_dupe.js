var containsDuplicate = function (nums) {
  if (nums.length === new Set(nums).size) {
    return false;
  } else {
    return true;
  }
};

let numbers = [1, 2, 3, 4, 5];

console.log(containsDuplicate(numbers));
