function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  //pull out values of every child within class .ranked-list
  var ranks = document.querySelectorAll('.ranked-list');
  
  //loop over each value and change it
  for (var i=0; i<ranks.length; i++) {
    ranks[i].innerHTML = parseInt(n) + 1;
  }
}