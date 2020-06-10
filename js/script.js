'use strict';

  let money = prompt('Ваш месячный доход?', 30000);
  let income = 'фриланс';
  let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ' Еда, квартира, транспорт');
  let deposit =  confirm(' Есть ли у вас депозит в банке?') ;
  let mission = 100000;
  let period = 6;

  alert ('любой текст');

  let showTypeOf = function(data) {
    console.log(data, typeof(data)); 
  };

  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);
  
  let budgetDay = money/30;

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

console.log (addExpenses.split( ', '));


console.log(intent);

budgetDay = Math.floor(accumulatedMonth / 30);

console.log(budgetDay);




let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return('У вас высокий уровень дохода!');
  } else if (1200 > budgetDay && budgetDay >= 600) {
    return('У вас средний уровень дохода!');
  } else if (budgetDay < 600 && budgetDay > 0) {
    return('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay <= 0){
    return('Что то пошло не так'); 
  }
};

console.log(getStatusIncome());



function getTargetMonth(mission, accumulatedMonth) {
    return Number(mission) / Number(accumulatedMonth);
}

let targetMounth = getTargetMonth(mission, accumulatedMonth);
 alert(targetMounth);