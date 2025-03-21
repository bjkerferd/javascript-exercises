const removeFromArray = function(arr, ...valsToRemove) {
   return arr.filter((element) => !valsToRemove.includes(element));
}    

// Do not edit below this line
module.exports = removeFromArray;
