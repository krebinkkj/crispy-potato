import { Time } from '@sapphire/time-utilities';
import { roundNumber } from '@sapphire/utilities';

export function seconds(seconds: number): number {
  return seconds * Time.Second;
}

seconds.fromMilliseconds = (milliseconds: number): number => {
  return roundNumber(milliseconds / Time.Second);
};

seconds.fromMinutes = (minutes: number): number => {
  return minutes * 60;
};

seconds.fromHours = (hours: number): number => {
  return hours * 60 * 60;
};

seconds.fromDays = (days: number): number => {
  return days * 60 * 60 * 24;
};

export function minutes(minutes: number) {
  return minutes * Time.Minute;
}

minutes.toSeconds = (value: number): number => {
  return roundNumber(minutes(value) / Time.Second);
};

export function hours(hours: number): number {
  return hours * Time.Hour;
}

export function days(days: number): number {
  return days * Time.Day;
}

export function months(months: number): number {
  return months * Time.Month;
}

export function years(years: number): number {
  return years * Time.Year;
}
