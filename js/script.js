'use strict';

  let money = prompt('Ваш месячный доход?', 30000);
  let income = 'фриланс';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ' Еда, квартира, транспорт');
  let deposit =  confirm(' Есть ли у вас депозит в банке?') ;
  let mission = 100000;
  let period = 6;

  alert ('любой текст');

  console.log (typeof money);

  console.log (typeof income);

  console.log (typeof deposit);

  console.log (addExpenses.length);

  console.log (`Период равен ${period} месяцев`);

 console.log (`Цель заработать ${mission} рублей`);

  console.log (addExpenses.toLowerCase());

  console.log (addExpenses.split( ', '));

  let budgetDay = money/30;

  console.log (budgetDay);

 console.log(money);

 console.log(addExpenses );

 console.log(confirm);

 let expenses1 = prompt(' Введите обязательную статью расходов?', 'Продукты на месяц');

 let amount1 = prompt('Во сколько это обойдется?', 6000 );

 let expenses2 = prompt(' Введите обязательную статью расходов?', ' Оплата квартиры');

 let amount2 = prompt('Во сколько это обойдется?', 10000);
 
 function getExpensesMonth(amount1, amount2) {
  return Number(amount1) + Number(amount2);
}

function getAccumulatedMonth(money, expensesMonth ) {
  return  Number(money) - Number(expensesMonth);
}

 let expensesMonth = getExpensesMonth(amount1, amount2);

 let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);


console.log(accumulatedMonth);

let intent = Math.ceil(mission / accumulatedMonth) ;

console.log(intent);

budgetDay = Math.floor(accumulatedMonth / 30);

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




function getTargetMonth(mission, accumulatedMonth) {
    return Number(mission) / Number(accumulatedMonth);
}

let targetMounth = getTargetMonth(mission, accumulatedMonth);
 alert(targetMounth);