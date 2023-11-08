export function getNewId() {
  return `${Math.floor((Date.now() / Math.random()) * 100)
    .toString()
    .slice(-2)}sv`;
}
