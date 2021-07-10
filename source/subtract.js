const selectorMap = {
  day: subtractDay,
  month: subtractMonth,
  year: subtractYear,
  hour: subtractHours,
  min: subtractMinutes,
  sec: subtractSeconds,
};

export function subtract(selector = "day", count, referenceDate) {
  return selectorMap[selector](count, referenceDate);
}

export function subtractDay(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setDate(new Date(referenceDate).getDate() - count)
  );
}

export function subtractMonth(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setMonth(new Date(referenceDate).getMonth() - count)
  );
}

export function subtractYear(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setFullYear(
      new Date(referenceDate).getFullYear() - count
    )
  );
}

export function subtractHours(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setHours(new Date(referenceDate).getHours() - count)
  );
}

export function subtractMinutes(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setMinutes(
      new Date(referenceDate).getMinutes() - count
    )
  );
}

export function subtractSeconds(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setSeconds(
      new Date(referenceDate).getSeconds() - count
    )
  );
}
