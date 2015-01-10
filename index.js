var search = module.exports = function(arr, value, min, max) {
  if (arr.length === 0) return -1;

  // Defaults
  if (!min) min = 0;
  if (!max) max = arr.length - 1;

  var index = min + Math.floor((max - min) / 2);
  var val = arr[index];
  if (val == value) return index;
  if (max - min == 0) return -1;
  if (val < value) return search(arr, value, min, index - 1);
  if (val > value) return search(arr, value, index + 1, max);
};
