export const debounce = (callback) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, 250, event);
  };
};
