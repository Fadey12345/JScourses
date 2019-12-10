 'use strict';
 
 let money = prompt("Какой у Вас бюджет на месяц?");
 let time =  prompt("Введите дату в формате YYYY-MM-DD");
 
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses :{},
    income : [],
    savings : false,
};
    let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце");
    let twoQuestions = prompt("Во сколько обойдется?");
    let threeQuestions = prompt("Введите обязательную статью расходов в этом месяце");
    let fourQuestions = prompt("Во сколько обойдется?");

    appData.expenses[oneQuestions] = twoQuestions;
    appData.expenses[threeQuestions] =  fourQuestions;


    alert(oneQuestions/30);
    alert(threeQuestions/30);
