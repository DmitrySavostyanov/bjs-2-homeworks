"use strict"
//Задача №1
function getArrayParams(...arr) {
  let min, max, sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    } 
    if (arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  alert(sum);
  let avg = +(sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

/*

//Задача №2
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}


//Задача №3
function makeWork (arrOfArr, func) {

}
*/