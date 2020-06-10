module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++
  }
  return item;
}

function fail(item) {
  const enh = item.enhancement
  if (enh >= 15) {
    item.durability -= 10;
    if (enh > 16) {
      item.enhancement -= 1;
    }
  } else {
    item.durability -=  5;
  }
  return item;
}

function repair(item) {
  item.durability = 100
  return item;
}

function get(item) {
  item.name = `[+${item.enhancement}] ${item.name}`
  return item;
}
