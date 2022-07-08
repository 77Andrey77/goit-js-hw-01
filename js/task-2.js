const total = 100;
const order = 100;

// if (order > total) {
//   console.log("На складе недостаточно твоаров!")
// } else {
// console.log("Заказ оформлен, с вами свяжется менеджер")
// }

const notWare = "На складе недостаточно твоаров!";
const yesWare = "Заказ оформлен, с вами свяжется менеджер";


order > total ? console.log(notWare) : console.log(yesWare);