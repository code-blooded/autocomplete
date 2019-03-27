export function constructTRIE(data) {
  let trie = {};
  data.forEach(element => {
    let temp = trie;
    element.split("").forEach((val, key, arr) => {
      if (temp[val]) {
      } else {
        temp[val] = {
          parent: temp
        };
      }
      if (Object.is(arr.length - 1, key)) {
        temp[val]["leaf"] = true;
      }
      temp = temp[val];
    });
  });
  return trie;
}

function getAll(trie, children, temp) {
  if (!trie["leaf"]) {
    Object.keys(trie).forEach(element => {
      if (element !== "parent") getAll(trie[element], children, temp + element);
    });
  } else if (Object.keys(trie).length > 1) {
    children.push(temp);
    Object.keys(trie).forEach(element => {
      if (element !== "parent") getAll(trie[element], children, temp + element);
    });
  } else children.push(temp);
}

export function getChildren(trie) {
  let children = [];
  getAll(trie, children, "");
  return children;
}

export function moveUp(trie) {
  console.log("moving up");
  // console.log(trie["parent"]);
  return trie["parent"];
}

export function moveDown(trie, val) {
  console.log("moving down", val);
  // console.log(trie[val]);
  if (!trie[val]) return {};
  return trie[val];
}
