'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

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

  let start = function(){
      

      do{ 
        money = prompt(' Ваш месячный доход?');
      }

      while (!isNumber(money));
  };
  
  start();

  let budgetDay = money/30;

let expenses = [];

let getExpensesMonth = function () {
    let sum = 0;


  for (let i = 0; i < 2; i++){
    
      expenses[i] = prompt(' Введите обязательную статью расходов?');

      do {
        sum += +prompt(' Во сколько это обойдется? ');
      }
      while (!isNumber(sum));
    
  }
  
    console.log(expenses);
    return sum;
};

let expensesAmount = (getExpensesMonth());

console.log('Расходы за месяц:' + expensesAmount);



function getAccumulatedMonth(money, expensesMonth ) {
  return  Number(money) - Number(expensesMonth);
}


 let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);


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

let targetMounth = Math.ceil(getTargetMonth(mission, accumulatedMonth));

if (targetMounth > 0) {
  console.log(`Цель будет достигнута за ${targetMounth} месяца`);
  } else {
    console.log('Цель не будет достигнута');
    
}

alert(targetMounth);

