export const getDayKey = (num, flag) => {
  const weekKeys = [
    'event.week-day.mondy',
    'event.week-day.tuesday',
    'event.week-day.wednesday',
    'event.week-day.thursday',
    'event.week-day.friday',
    'event.week-day.saturday',
    'event.week-day.sunday',
  ]
  const monthKeys = [
    'event.month.january',
    'event.month.february',
    'event.month.march',
    'event.month.april',
    'event.month.may',
    'event.month.june',
    'event.month.july',
    'event.month.august',
    'event.month.september',
    'event.month.october',
    'event.month.november',
    'event.month.december',
  ]
  if (flag === 0) {
    return weekKeys[num]
  } else {
    return monthKeys[num]
  }
}
