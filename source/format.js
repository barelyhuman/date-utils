const selectorMap = {
  DD: getDate,
  MM: getMonth,
  YYYY: getYear,
  hh: getHours,
  mm: getMinutes,
  ss: getSeconds,
};

// Rethink the approach. for now bruteforce the format

// format - allows you to use the following keys to handle simple
// formatting of dates
// supported keys:
/* 
  DD: date 
  MM: month
  YYYY: year 
  hh: hours
  mm: minutes
  ss: seconds
*/
export function format(formatString, referenceDate = new Date()) {
  return formatString
    .replace(/DD/g, selectorMap["DD"](referenceDate))
    .replace(/MM/g, selectorMap["MM"](referenceDate))
    .replace(/YYYY/g, selectorMap["YYYY"](referenceDate))
    .replace(/hh/g, selectorMap["hh"](referenceDate))
    .replace(/mm/g, selectorMap["mm"](referenceDate))
    .replace(/ss/g, selectorMap["ss"](referenceDate));
}

function getDate(referenceDate = new Date()) {
  return new Date(referenceDate).getDate();
}
function getMonth(referenceDate = new Date()) {
  return new Date(referenceDate).getMonth();
}
function getYear(referenceDate = new Date()) {
  return new Date(referenceDate).getFullYear();
}
function getHours(referenceDate = new Date()) {
  return new Date(referenceDate).getHours();
}
function getMinutes(referenceDate = new Date()) {
  return new Date(referenceDate).getMinutes();
}
function getSeconds(referenceDate = new Date()) {
  return new Date(referenceDate).getSeconds();
}
