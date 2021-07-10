const selectorMap = {
  day: addDay,
  month: addMonth,
  year: addYear,
  hour: addHours,
  min: addMinutes,
  sec: addSeconds,
};

export function add(selector = "day", count, referenceDate) {
  return selectorMap[selector](count, referenceDate);
}

export function addDay(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setDate(new Date(referenceDate).getDate() + count)
  );
}

export function addMonth(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setMonth(new Date(referenceDate).getMonth() + count)
  );
}

export function addYear(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setFullYear(
      new Date(referenceDate).getFullYear() + count
    )
  );
}

export function addHours(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setHours(new Date(referenceDate).getHours() + count)
  );
}

export function addMinutes(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setMinutes(
      new Date(referenceDate).getMinutes() + count
    )
  );
}

export function addSeconds(count, referenceDate = new Date()) {
  return new Date(
    new Date(referenceDate).setSeconds(
      new Date(referenceDate).getSeconds() + count
    )
  );
}
