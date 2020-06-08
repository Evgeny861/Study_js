'use strict';

// второй урок

  let money = 30000;

  
//  let income = 'фриланс';
//  let addExpenses = 'интернет, еда, коммуналка';
//  let deposit = true ;
  let mission = 100000;
//  let period = 6;

//  alert ('любой текст');

//  console.log (typeof money);

//  console.log (typeof income);

//  console.log (typeof deposit);

//  console.log (addExpenses.length);

//  console.log (`Период равен ${period} месяцев`);

// console.log (`Цель заработать ${mission} рублей`);

//  console.log (addExpenses.toLowerCase());

//  console.log (addExpenses.split( ', '));

  let budgetDay = money/30;

//  console.log (budgetDay);


// Третий урок

 money = prompt('Ваш месячный доход?');

// console.log(money);

// addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// console.log(addExpenses );

// deposit = confirm(' Есть ли у вас депозит в банке?');

// console.log(confirm);

// let expenses1 = prompt(' Введите обязательную статью расходов?');

 let amount1 = prompt('Во сколько это обойдется?');

// let expenses2 = prompt(' Введите обязательную статью расходов?');

 let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = +money - (Number(amount1) + Number(amount2));

console.log(budgetMonth);

let intent = Math.ceil(mission / budgetMonth) ;

console.log(intent);

budgetDay = Math.floor(budgetMonth / 30);

console.log(budgetDay);


  if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода!');
} else if (1200 > budgetDay && budgetDay >= 600) {
  console.log('У вас средний уровень дохода!');
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0){
  console.log('Что то пошло не так'); 
}



