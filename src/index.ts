const trappingRainWater = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;
  while (left < right) {
    const leftVal = height[left] ?? 0;
    const rightVal = height[right] ?? 0;
    if (leftVal < rightVal) {
      if (leftVal > leftMax) {
        leftMax = leftVal;
      } else {
        result += leftMax - leftVal;
      }
      left++;
    } else {
      if (rightVal > rightMax) {
        rightMax = rightVal;
      } else {
        result += rightMax - rightVal;
      }
      right--;
    }
  }
  return result;
};

console.log(trappingRainWater([4, 2, 0, 3, 2, 5]));
