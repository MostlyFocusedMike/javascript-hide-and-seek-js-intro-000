function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0];
}

function nestedTarget() {
  return document.querySelectorAll("#nested .target")[0];
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}

function increaseRankBy(n) {
  document.querySelector(".ranked-list");
}