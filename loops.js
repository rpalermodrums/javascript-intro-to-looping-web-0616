function forLoop(array){
  for (i = 1; i <= 25; i++){
    array.push(`I am ${i} strange array${i == 1 ? '' : 's'}`);
  }
  return array
}

function whileLoop(n){
  while (n > 0) {
    n--;
    console.log(n)
  }
  return 'done'
}



function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.pop;
  } while (array.length != 0 && (maybeTrue() != false));
  return array
}
