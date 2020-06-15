'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function(){
      

      do{ 
        money = prompt(' Ваш месячный доход?');
      }

      while (!isNumber(money));
  };
  
  start();

  let expenses = [];

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
              let  expensesMonth;
              let  expenses;
              let addExpenses = prompt('Перечислите возможные расходы за  рассчитываемый период через запятую');
              appData.addExpenses = addExpenses.toLowerCase().split( ', ');
              appData.deposit =  confirm(' Есть ли у вас депозит в банке?');
                for (let i = 0; i < 2; i++){
                  expenses = prompt(' Введите обязательную статью расходов?');
                  do {
                    expensesMonth  = prompt(' Во сколько это обойдется? ');
                    }
                  while (!isNumber(expensesMonth));

                  appData.expenses[expenses] = +expensesMonth;
              }
            },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    //  считает сумму обязательных рассходов
    getExpensesMonth:  function() {
      let sum = 0;

      for (let key in appData.expenses) {
        sum += +(appData.expenses[key]);
      }
      return sum;
      
      
    },
  getBudget: function () {
    appData.budgetMonth = +appData.budget - +appData.getExpensesMonth();
    appData.budgetDay = +appData.budgetMonth / 30;
    
    return  Number(appData.budget) - Number(appData.getExpensesMonth());
  },
  // Функция подсчитывает за какой период будет достигнута цель
  getTargetMonth: function () {

    return Number(appData.mission) / Number(appData.getBudget());
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return('У вас высокий уровень дохода!');
    } else if (1200 > appData.budgetDay && appData.budgetDay >= 600) {
      return('У вас средний уровень дохода!');
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0){
      return('Что то пошло не так'); 
    }
  }
  
  };
  
 for (let key in appData) {
  console.log(`Наша программа включает в себя данные: ${key} : ${appData[key]}`);
}
   
  
appData.asking();



console.log(`Расходы за месяц равны ${appData.getExpensesMonth()}`);

console.log(`Цель будет достигнута через ${appData.getTargetMonth()} месяцев`);

console.log(appData.getStatusIncome());