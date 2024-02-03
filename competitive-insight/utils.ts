export const isValidString = (str: string | undefined | boolean): str is string =>
  str != null && typeof str === "string" && str.trim().length > 0;

export const merge = (classes: Array<string | undefined | boolean>) => {
  const found = classes.filter((c) => isValidString(c));

  const classNames = found.join(" ");
  return classNames;
};
