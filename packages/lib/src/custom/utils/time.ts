const timeRegex = /^\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?$/;

export function getTimeOffset(time: string): number {
  if (time == "start") {
    return 0;
  }
  if (time == "end") {
    return 0;
  }
  if (timeRegex.test(time)) {
    const [hours = "00", minutes = "00", secondsAndMs = "00"] = time.split(":");
    let seconds = "00";
    let millisecs = "000";
    if (secondsAndMs.includes(".")) {
      [seconds, millisecs] = secondsAndMs.split(".");
    } else {
      seconds = secondsAndMs;
    }
    const milliseconds =
      (parseInt(hours, 10) * 3600 +
        parseInt(minutes, 10) * 60 +
        parseInt(seconds, 10)) *
        1000 +
      parseInt(millisecs, 10);
    return milliseconds;
  }

  return parseFloat(time);
}
