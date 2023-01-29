//задача №1
"use stict";
function solveEquation(a, b, c) {
  let arr = new Array();
  let d = (b * b) - (4 * a * c);
  alert("Дискиминант = " + d);
  if (d < 0) {
    alert("Квадратное уравнение не имеет корней");
    alert(arr);
    return arr;
  } else if (d == 0) {
    let x = -(b / 2 * a);
    alert("Квадратное уравнение имеет один корень: x = " + x);
    arr[0] = x;
    return arr;
  } else if (d > 0) {
    let x1 = Number((-b + Math.sqrt(d)) / 2 * a);
    let x2 = Number((-b - Math.sqrt(d)) / 2 * a);
    alert("Квадратное уравнение имеет два корня: x1 = " + x1 + " x2 = " + x2);
    arr[0] = x1;
    arr[1] = x2;
    return arr;

  }
}

//задача №2
let percent = Number(prompt("Введите процентную ставку в %"));//процентная ставка
let contribution = Number(prompt("Введите сумму первого взноса в руб."));//сумма перв. взноса
let amount = Number(prompt("Введите общую стоимость ипотечного кредита в руб."));// общая стоимость
let countMonths = Number(prompt("Введите срок ипотеки (кол-во месяцев)"));
calculateTotalMortgage(percent, contribution, amount, countMonths) //вызов функции

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Контроль корректности введенных данных. 
  if (isNaN(percent) || isNaN (contribution) || isNaN (amount)) {
    return false;
  }
  let per = percent / 100 / 12; //процентная ставка по условию
  let s = amount - contribution; //тело кредита
  let pay = s * (per + (per / (Math.pow(1 + per, countMonths) - 1)));
  let totalAmount = +(pay * countMonths).toFixed(2);//сумма, которую придётся заплатить клиенту.
  return totalAmount;
}