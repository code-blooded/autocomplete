export function generate() {
  let temp = "";
  let length = Math.floor(Math.random() * 16) + 3;
  for (let index = 0; index < length; index++) {
    let rchar = String.fromCharCode(Math.floor(Math.random() * 60) + 65);
    temp += rchar;
  }
  return temp;
}
