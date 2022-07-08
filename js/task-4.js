const credits = 23580;
const pricePerDroid = 3000;
let message;

const howMach = prompt('Напишите количество дроидов которые вы хочете купить');

let totalPrice = howMach * pricePerDroid;
 let balance = credits - totalPrice;

// if (howMach !== null) {
//   totalPrice = howMach * pricePerDroid;

//   if (totalPrice > credits) {
//     message= 'Недостаточно средств на счету!';
//   } else {
//     const balance = credits - totalPrice;
//     message=`Вы купили ${howMach} дроидов, на счету осталось ${balance} кредитов.`
//   }
  
// } else { message = 'Отменено пользователем!'; }




if (howMach === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message= 'Недостаточно средств на счету!';
} else {
  
   message=`Вы купили ${howMach} дроидов, на счету осталось ${balance} кредитов.`
}

alert(message); 