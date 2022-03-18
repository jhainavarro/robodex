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
  return GREETINGS[randomNumber(0, GREETINGS.length)];
}

export function randomPrefix(): string {
  return PURPOSE_PREFIXES[randomNumber(0, PURPOSE_PREFIXES.length)];
}

function randomNumber(min: number, max: number): number {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
