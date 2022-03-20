const GREETINGS = [
  "Greetings!",
  "Beep beep boop bap!",
  "... Meep morp ...",
  "Hi there!",
];

const PURPOSE_PREFIXES = [
  "And I was built to ...",
  "My purpose is to ...",
  "I am going to ...",
];

export function randomGreeting(): string {
  return sampleOne(GREETINGS);
}

export function randomPrefix(): string {
  return sampleOne(PURPOSE_PREFIXES);
}

function sampleOne<T>(list: T[]): T {
  const i = Math.floor(Math.random() * list.length);

  return list[i];
}
