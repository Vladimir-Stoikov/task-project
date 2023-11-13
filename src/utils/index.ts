export function checkBoolean(value: string | boolean | undefined) {
  switch (value) {
    case true:
      return true;
    case 'true':
      return true;
    case false:
      return false;
    case 'false':
      return false;
    default:
      return false;
  }
}
