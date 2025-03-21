const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isQuadCentury = year % 400 === 0;
    return (isYearDivisibleByFour && (!isCentury || isQuadCentury));
};

// Do not edit below this line
module.exports = leapYears;
