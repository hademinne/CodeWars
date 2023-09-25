/**
 *DESCRIPTION:
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

 */
//Solution
function periodIsLate(last, today, cycleLength) {
  let period = getPeriod(last, today);

  return period > cycleLength;
}

function getPeriod(last, today) {
  const delta = Math.abs(today.getTime() - last.getTime()) / 1000;

  const days = Math.floor(delta / 86400);

  return days;
}
