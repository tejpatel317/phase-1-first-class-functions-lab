// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0,2);
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(arrayOfDrivers.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return (fare) => number*fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLastTwo) {
    if (firstOrLastTwo === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (firstOrLastTwo === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}