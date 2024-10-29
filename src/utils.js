export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertTimeToBase12(timeStr) {
  let [hour, minute] = timeStr.split(":");
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour.toString().padStart(2, 0)}:${minute} ${suffix}`;
}

export function toOneDecimalPlace(number) {
  return number.toFixed(1);
}
