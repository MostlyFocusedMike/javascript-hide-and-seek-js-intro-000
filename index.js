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
  const lis = document.querySelectorAll('.ranked-list li')
 
  for (let i = 0; i < lis.length; i++) {
    let num = lis[i].innerHTML;
    lis[i].innerHTML = num + n;
  }
}

increaseRankBy(3)