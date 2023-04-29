import dayjs from "dayjs";

export const toEpochMillis = (date: string) => {
  return dayjs(date).valueOf();
};
