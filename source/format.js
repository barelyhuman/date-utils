const addArg =
  (fn, pad) =>
  (...args) =>
    fn(...args, pad);

const selectorMap = {
  DD: addArg(getDate, true),
  MM: addArg(getMonth, true),
  YYYY: getYear,
  hh: addArg(getHours, true),
  mm: addArg(getMinutes, true),
  ss: addArg(getSeconds, true),

  // Single letter matchers, added to the bottom
  // to avoid them from replacing the above keys first
  D: getDate,
  M: getMonth,
  h: getHours,
  m: getMinutes,
  s: getSeconds,
};

// format - allows you to use the following keys to handle simple
// formatting of dates
// supported keys:
/* 
  DD: date 
  MM: month
  YYYY: year 
  hh: hour
  mm: minute
  ss: seconds

  D: date 
  M: month
  h: hour
  m: minute
  s: second
*/
const regexBuilder = (key) => new RegExp(`${key}`);
export function format(formatString, referenceDate = new Date()) {
  return Object.keys(selectorMap).reduce((acc, eachKey) => {
    return acc.replace(
      regexBuilder(eachKey),
      selectorMap[eachKey](referenceDate)
    );
  }, formatString);
}

function getDate(referenceDate = new Date(), pad = false) {
  let val = new Date(referenceDate).getDate();
  if (pad) {
    val = Number(val) < 10 ? `0${val}` : val;
  }
  return val;
}
function getMonth(referenceDate = new Date(), pad = false) {
  let val = new Date(referenceDate).getMonth();
  if (pad) {
    val = Number(val) < 10 ? `0${val}` : val;
  }
  return val;
}
function getYear(referenceDate = new Date()) {
  return new Date(referenceDate).getFullYear();
}
function getHours(referenceDate = new Date(), pad = false) {
  let val = new Date(referenceDate).getHours();
  if (pad) {
    val = Number(val) < 10 ? `0${val}` : val;
  }
  return val;
}
function getMinutes(referenceDate = new Date(), pad = false) {
  let val = new Date(referenceDate).getMinutes();
  if (pad) {
    val = Number(val) < 10 ? `0${val}` : val;
  }
  return val;
}
function getSeconds(referenceDate = new Date(), pad = false) {
  let val = new Date(referenceDate).getSeconds();
  if (pad) {
    val = Number(val) < 10 ? `0${val}` : val;
  }
  return val;
}
