// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
  return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => {
  const newFare = fare => fare * int;
  return newFare;
}

const fareDoubler = fare => {
  return createFareMultiplier(2)(fare);
}

const fareTripler = fare => {
  return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = (drivers, currentGroup) => {
  return currentGroup(drivers);
}