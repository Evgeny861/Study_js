'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let isString =  function(n) {
  return isNaN(parseFloat(n)) && n !== "" && n.trim();
};

let money;

let start = function(){
      

      do{ 
        money = prompt(' Ваш месячный доход?', 23000);
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
    percentDeposit: 0,
    moneyDeposit:0,
    mission: 50000,
    period: 3,
    asking: function() {

              if(confirm('Есть ли у вас дополнительный заработок?')){
                let itemIncome ;
                do {
                  itemIncome = prompt(' Какой у вас есть дополнительный заработок?', 'Сайты');
                }
                while(!isString(itemIncome));

                let cashIncome ;
                do {
                  cashIncome  = prompt('Сколько в месяц вы зарабатываете на этом?', 10000);
                  }
                while (!isNumber(cashIncome));
              }
              let  expensesMonth;
              let  expenses;
              let addExpenses = prompt('Перечислите возможные расходы за  рассчитываемый период через запятую', 'еда, вода, каша');
              appData.addExpenses = addExpenses.toLowerCase().split( ', ');
              
                for (let i = 0; i < 2; i++){
                  do {
                    expenses = prompt(' Введите обязательную статью расходов?');
                    }
                  while (!isString(expenses));
                  do {
                    expensesMonth  = prompt(' Во сколько это обойдется? ', 1500);
                    }
                  while (!isNumber(expensesMonth));

                  appData.expenses[expenses] = +expensesMonth;
              }
              appData.deposit =  confirm(' Есть ли у вас депозит в банке?');
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
  },
  getInfoDeposit: function() {
      if(appData.deposit){
        do {
          appData.percentDeposit  = prompt('Какой годовой процент?', 5);
          }
        while (!isNumber(appData.percentDeposit));
        do {
          appData.percentDeposit  = prompt('Какая сумма заложена?', 10000);
          }
        while (!isNumber(appData.percentDeposit));
      }
  },
  calcSaveMoney: function(){
    return appData.budgetMonth * appData.period;
  },
  
  };
  
  
 for (let key in appData) {
  console.log(`Наша программа включает в себя данные: ${key} : ${appData[key]}`);
}

  
appData.asking();
appData.getInfoDeposit();


console.log(`Расходы за месяц равны ${appData.getExpensesMonth()}`);

console.log(`Цель будет достигнута через ${Math.round(appData.getTargetMonth())} месяцев`);

console.log(appData.getStatusIncome());

let result = '';
for (let symbol of appData.addExpenses) {
  symbol = symbol.charAt(0).toUpperCase() + symbol.substring(1);
  result += symbol + ', ';
}

// let words = ['первый', 'второй', 'третий'];
// let result = '';

// for (let word of words) {
//     word = word.charAt(0).toUpperCase() + word.substring(1);
//     result += word + ', ';
// }

console.log(result);
