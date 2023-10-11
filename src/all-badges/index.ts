export const allBadges = [
  await import('./abc-commit/abc-commit.js'),
  await import('./stars/stars.js'),
  await import('./time-of-commit/time-of-commit.js'),
  await import('./github-anniversary/github-anniversary.js'),
  await import('./yeti/yeti.js'),
  await import('./star-gazer/star-gazer.js'),
  await import('./dead-commit/dead-commit.js'),
  await import('./bad-words/bad-words.js'),
  await import('./mass-delete-commit/mass-delete-commit.js'),
  await import('./revert-revert-commit/revert-revert-commit.js'),
  await import('./my-badges-contributor/my-badges-contributor.js'),
  await import('./fix-commit/fix-commit.js'),
  await import('./chore-commit/chore-commit.js'),
  await import('./delorean/delorean.js'),
  await import('./covid-19/covid-19.js'),
] as const

export const names = allBadges.flatMap(({ default: { badges } }) => badges)
