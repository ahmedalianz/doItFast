const getIntervalsBetweenShifts = (startTime, endTime, interval, isToday) => {
  try {
    let pattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (pattern.test(interval) === false)
      throw new Error("Invalid interval format");
    if (parseInt(endTime) - parseInt(startTime) < parseInt(interval))
      throw new Error("interval is greater than shift duration");
    let shifts = [];
    shifts.push(startTime);
    do {
      let addedTime = addTimes(shifts[shifts.length - 1], interval);
      shifts.push(addedTime);
    } while (shifts[shifts.length - 1] !== endTime);
    shifts = convertToAmPm(shifts);

    let shiftsWithRecentTimes = [...shifts];
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    if (isToday) {
      shiftsWithRecentTimes = shiftsWithRecentTimes.filter((time) => {
        let hour = parseInt(time.substring(0, 2));
        let minute = parseInt(time.substring(3, 5));
        if (time.includes("AM")) {
          if (hour > currentHour) {
            return time;
          } else if (hour === currentHour) {
            if (minute > currentMinute) {
              return time;
            }
          }
        } else {
          if (hour > 11) {
            hour -= 12;
          } else {
            hour += 12;
          }
          if (hour > currentHour) {
            return time;
          } else if (hour === currentHour) {
            if (minute > currentMinute) {
              return time;
            }
          }
        }

        return false;
      });
    }

    return shiftsWithRecentTimes;
  } catch (err) {
    console.log("get intervals betwwen shifts error", err);
  }
};

function timeToMins(time) {
  var b = time.split(":");
  return b[0] * 60 + +b[1];
}

// Convert minutes to a time in format hh:mm
// Returned value is in range 00  to 24 hrs
function timeFromMins(mins) {
  function z(n) {
    return (n < 10 ? "0" : "") + n;
  }
  var h = ((mins / 60) | 0) % 24;
  var m = mins % 60;
  return z(h) + ":" + z(m);
}

// Add two times in hh:mm format
function addTimes(t0, t1) {
  return timeFromMins(timeToMins(t0) + timeToMins(t1));
}
function convertToAmPm(shifts) {
  return shifts.map((shift) =>
    +shift.substring(0, 2) > 12
      ? `${shift.substring(0, 2) - 12 < 10 ? "0" : ""}${
          shift.substring(0, 2) - 12
        }${shift.substring(2, 5)} PM`
      : `${shift} ${shift.substring(0, 2) === "12" ? "PM" : "AM"}`
  );
}
module.exports = getIntervalsBetweenShifts;
