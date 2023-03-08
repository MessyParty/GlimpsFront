import { useRef } from "react";

interface DebounceProps<T extends any[]> {
  callBack: (...args: T) => any;
  timeout?: number;
}

const useDebounce = <Params extends any[]>({
  callBack,
  timeout = 1000,
}: DebounceProps<Params>) => {
  const timerId = useRef<NodeJS.Timeout>();

  return (...args: Params) => {
    if (timerId.current !== undefined) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => callBack(...args), timeout);
  };
};

export default useDebounce;
