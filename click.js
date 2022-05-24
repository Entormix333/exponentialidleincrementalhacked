let counter = 0;
let h = 1e70;
let b = 0;
let prestigeclub = 0;
let prestigeclubcost = 1e6;
let superprestigeclub = 0;
  
document.getElementById('button').onclick = () => {
  counter = counter + h + b;
  document.getElementById('score').innerText = counter;
};

document.getElementById('buy1').onclick = () => {
  if (counter > 500) {
      h = h + 1 + prestigeclub
      document.getElementById('h01').innerText = h;
      counter = counter - 500;
  }
};

document.getElementById('buy2').onclick = () => {
  if (counter > 10000) {
      b = b + 1 + prestigeclub / 2
      document.getElementById('h01').innerText = b;
      counter = counter - 10000;
  }
};

if (this.keyPressed("space")) {
  if (counter > prestigeclubcost - 1) {
    prestigeclub = prestigeclub + 1
    h = prestigeclub + 1
    b = prestigeclub / 2
    prestigeclubcost = prestigeclubcost * 1.3
    counter = 0;
    document.getElementById('pressing').value = "Prestige Club Prees to Space. (Cost:" + prestigeclubcost + ")";
  }
}

document.getElementById('buy3').onclick = () => {
  if (counter > prestigeclubcost - 1) {
    prestigeclub = prestigeclub + 1 + superprestigeclub
    h = prestigeclub + 1
    b = prestigeclub / 2
    prestigeclubcost = prestigeclubcost * 1.3
    counter = 0;
    document.getElementById('pressing').innerText = "Prestige Club Prees to Space. (Cost:" + prestigeclubcost + ")";
    document.getElementById('havingclub').value = prestigeclub;
  }
}

document.getElementById('buy4').onclick = () => {
  if (prestigeclub > 2) {
    prestigeclub = prestigeclub - 2
    h = h + 100
    b = b + 50
  }
}

document.getElementById('buy5').onclick = () => {
  if (prestigeclub > 3) {
    prestigeclub = prestigeclub - 3
    h = h + 300
    b = b + 125
  }
}

document.getElementById('buy6').onclick = () => {
  if (prestigeclub > 100) {
    prestigeclub = prestigeclub - 100
    h = h + 1e5
    b = b + 9999
  }
}

document.getElementById('buy7').onclick = () => {
  if (counter > 5e7) {
    prestigeclub = prestigeclub - 100
    h = h + 1e7
    b = b + 1e6
  }
}

document.getElementById('buy8').onclick = () => {
  if (counter > 5e7) {
    prestigeclub = 0;
    h = 0;
    b = 0;
    counter = 0;
    document.getElementById('havingsclub').value = superprestigeclub;
  }
}

document.getElementById('buy9').onclick = () => {
  if (superprestigeclub > 2) {
    h = h + 1e6
    b = 5e5;
    superprestigeclub = superprestigeclub - 2
  }
}
