export const debounce = <Params extends any[]>(
  callBack: <T = void>(...args: Params) => T,
  timeout = 1000
) => {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callBack(...args);
    }, timeout);
  };
};
