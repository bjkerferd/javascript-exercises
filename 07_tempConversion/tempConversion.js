const convertToCelsius = function(tempF) {
  tempC = (tempF - 32) * 5/9; // Refer Wikipedia for formula 
  return Math.round(tempC * 10) / 10; // Return val to 1 d.p.
};

const convertToFahrenheit = function(tempC) {
  tempF = (tempC * 9/5 + 32); 
  return Math.round(tempF * 10) / 10; // Return val to 1 d.p
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
