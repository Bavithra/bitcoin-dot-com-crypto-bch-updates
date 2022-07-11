import { differenceInDays, differenceInHours } from "date-fns";

export function getDuration(date: string) {
  if(differenceInDays(new Date(), new Date(date)) > 0) {
  return `${differenceInDays(new Date(), new Date(date))} day(s) ago`
  } else {
    return `${differenceInHours(new Date(), new Date(date))} hour ago`

  }
}

export default {
  getDuration,
};
