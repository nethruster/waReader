export default function computeUserInitials(name) {
  if (name.startsWith('+') || name.startsWith('\u202a')) {
    return '#';
  } else {
    let nameArray = name.split(' ');
    let isNameArray = nameArray.length > 1;

    if (isNameArray) {
      return nameArray.reduce(
        (previousValue, currentValue) =>
          previousValue.charAt(0) + currentValue.charAt(0)
      );
    } else {
      return name.charAt(0);
    }
  }
}
