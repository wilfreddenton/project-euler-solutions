function isLeapYear(year) {
  return (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) ? true : false;
}
function daysInMonth(month, year) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (isLeapYear(year))
        return 29;
      else
        return 28;
    default:
      return 31;
  }
}
function countingSundays() {
  var count = 0;
  var day = 0;
  for (var year = 1900; year <= 2000; year += 1) {
    for (var month = 1; month <= 12; month += 1) {
      var numDays = daysInMonth(month);
      for (var date = 1; date <= numDays; date += 1) {
        day = day === 7 ? 1 : day + 1;
        if (day === 7 && date === 1 && year > 1900)
          count += 1;
      }
    }
  }
  return count;
}

console.log(countingSundays());
