let x = true;

switch (typeof x) {
  case "number":
    x = "x - число";
    break;
  case "string":
    x = "x - строка";
    break;
  case "boolean":
    x = "x - логическое";
    break;
  default:
    x = "Тип x не определен";
}
console.log(x);