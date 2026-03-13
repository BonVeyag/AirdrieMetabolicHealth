const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const CLASS_TIME_ZONE = "America/Edmonton";
export const CLASS_START_DATE = "2026-04-07";
export const CLASS_BOOKING_WEEKS = 6;
export const CLASS_DAY_UTC = 2;
export const CLASS_NAME = "Community Metabolic Health";
export const CLASS_TIME_LABEL = "8:00 PM";
export const CLASS_END_TIME_LABEL = "8:30 PM";
export const CLASS_TIME_RANGE_LABEL = "8:00 - 8:30 PM";
export const CLASS_SESSION_LABEL = "Tuesdays at 8:00 PM (Zoom)";

export type ClassSession = {
  dateKey: string;
  shortLabel: string;
  longLabel: string;
};

type ClassCalendarLinkOptions = {
  zoomLink: string;
};

function classDateKeyToCompactDate(dateKey: string) {
  return dateKey.replace(/-/g, "");
}

export function getClassGoogleCalendarUrl({ zoomLink }: ClassCalendarLinkOptions) {
  const compactStartDate = classDateKeyToCompactDate(CLASS_START_DATE);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: CLASS_NAME,
    details:
      "Free weekly public-service drop-in Zoom session. No registration required. Just show up.\n" +
      `Zoom link: ${zoomLink}\n` +
      "Bring your Alberta Health Care card number.",
    location: "Zoom",
    dates: `${compactStartDate}T200000/${compactStartDate}T203000`,
    ctz: CLASS_TIME_ZONE,
    recur: "RRULE:FREQ=WEEKLY;BYDAY=TU",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function normalizeAlbertaHealthCareNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 9 ? digits : null;
}

export function formatAlbertaHealthCareNumber(digits: string) {
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 9)}`;
}

export function isClassDateKey(value: string) {
  if (!DATE_KEY_PATTERN.test(value)) {
    return false;
  }

  const date = dateKeyToUtcNoonDate(value);
  return Number.isFinite(date.getTime());
}

export function dateKeyToUtcNoonDate(dateKey: string) {
  return new Date(`${dateKey}T12:00:00.000Z`);
}

function utcDateToDateKey(date: Date) {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  const day = `${date.getUTCDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getLocalDateKey(date = new Date(), timeZone = CLASS_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    throw new Error("Failed to derive local date key.");
  }

  return `${year}-${month}-${day}`;
}

export function formatClassDate(dateKey: string) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CLASS_TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(dateKeyToUtcNoonDate(dateKey));
}

function formatClassDateShort(dateKey: string) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CLASS_TIME_ZONE,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(dateKeyToUtcNoonDate(dateKey));
}

function addDays(dateKey: string, days: number) {
  const next = dateKeyToUtcNoonDate(dateKey);
  next.setUTCDate(next.getUTCDate() + days);
  return utcDateToDateKey(next);
}

function getNextClassDateOnOrAfter(dateKey: string) {
  let candidate = dateKey >= CLASS_START_DATE ? dateKey : CLASS_START_DATE;

  while (dateKeyToUtcNoonDate(candidate).getUTCDay() !== CLASS_DAY_UTC) {
    candidate = addDays(candidate, 1);
  }

  return candidate;
}

function buildClassSession(dateKey: string): ClassSession {
  return {
    dateKey,
    shortLabel: `${formatClassDateShort(dateKey)} · ${CLASS_TIME_RANGE_LABEL}`,
    longLabel: `${formatClassDate(dateKey)} at ${CLASS_TIME_RANGE_LABEL} (${CLASS_TIME_ZONE})`,
  };
}

export function isScheduledClassDate(dateKey: string) {
  if (!isClassDateKey(dateKey) || dateKey < CLASS_START_DATE) {
    return false;
  }

  return dateKeyToUtcNoonDate(dateKey).getUTCDay() === CLASS_DAY_UTC;
}

export function getBookableClassDateKeys({
  weeks = CLASS_BOOKING_WEEKS,
}: {
  weeks?: number;
} = {}) {
  const sessionCount = Number.isFinite(weeks) ? Math.max(0, Math.floor(weeks)) : 0;
  const keys: string[] = [];
  let nextDateKey = getNextClassDateOnOrAfter(CLASS_START_DATE);

  for (let index = 0; index < sessionCount; index += 1) {
    keys.push(nextDateKey);
    nextDateKey = addDays(nextDateKey, 7);
  }

  return keys;
}

export function isBookableClassDate(dateKey: string) {
  if (!isClassDateKey(dateKey)) {
    return false;
  }

  return getBookableClassDateKeys().includes(dateKey);
}

export function getBookableClassSessions({
  weeks = CLASS_BOOKING_WEEKS,
}: {
  weeks?: number;
} = {}): ClassSession[] {
  return getBookableClassDateKeys({ weeks }).map((dateKey) =>
    buildClassSession(dateKey),
  );
}

export function getUpcomingClassSessions({
  count = 8,
  fromDate = new Date(),
}: {
  count?: number;
  fromDate?: Date;
} = {}): ClassSession[] {
  const sessions: ClassSession[] = [];
  let nextDateKey = getNextClassDateOnOrAfter(getLocalDateKey(fromDate));

  for (let index = 0; index < count; index += 1) {
    sessions.push(buildClassSession(nextDateKey));
    nextDateKey = addDays(nextDateKey, 7);
  }

  return sessions;
}
