function debouncing(fn, delay) {
  let time;
  return function (...args) {
    time = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
let debouce = () => {
  console.log("Debouncing after 1 Sec :");
};
let redebounce = debouncing(debouce, 1000);
redebounce();

