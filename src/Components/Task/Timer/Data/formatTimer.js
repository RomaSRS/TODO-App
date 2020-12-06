function timeFormatter(number) {
 if (number < 10) {
  return `0${number}`;
 }
 return `${number}`;
}

export default timeInSeconds => {
 const minutes = Math.trunc(timeInSeconds / 60);
 const seconds = timeInSeconds - 60 * minutes;
 return `${timeFormatter(minutes)}:${timeFormatter(seconds)}`;
};
