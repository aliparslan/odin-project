const ftoc = function(temp) {
  if (temp == 32) {
    return 0.0;
  }
  result = (temp - 32) * (5/9);
  return Math.round(result * 10) / 10;
};

const ctof = function(temp) {
  if (temp == 0) {
    return 32.0;
  }
  result = 1.8 * temp + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
