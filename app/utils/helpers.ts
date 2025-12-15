import { dateDiffReadable, getMonth } from "matija-utils";

export const formatDuration = (from: Date, to: Date | null) => {
  return `${`${getMonth(from)} ${from.getFullYear()}`} - ${
    to ? `${getMonth(to)} ${to.getFullYear()}` : "Current"
  } (${dateDiffReadable(from, to || new Date())})`;
};

export const yearsOfExperience = (
  dateGroups: { from: Date; to: Date | null }[]
) => {
  const res = dateGroups.reduce((acc, { from, to }) => {
    return acc + ((to ? to.getTime() : Date.now()) - from.getTime());
  }, 0);
  return new Date(res).getFullYear() - 1970;
};
